import { 
  MOCK_STUDENT_STATS, 
  MOCK_PERFORMANCE_DATA, 
  MOCK_ADMIN_STATS, 
  MOCK_REVENUE_DATA,
  MOCK_STUDENTS_LIST,
  MOCK_BATCHES_LIST,
  MOCK_FINANCE_DATA
} from './mockData';

// Helper to simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generic fetcher with fallback
async function fetchData<T>(endpoint: string, fallbackData: T): Promise<T> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    // console.warn(`Failed to fetch from ${endpoint}, falling back to mock data.`);
    await delay(400); 
    return fallbackData;
  }
}

// Generic mutator with fallback
async function mutateData<T>(endpoint: string, method: string, data: any, fallbackResponse: T): Promise<T> {
  try {
    const response = await fetch(`/api/${endpoint}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("API Error");
    return await response.json();
  } catch (e) {
    console.log(`[Mock API] ${method} ${endpoint} successful`);
    await delay(600);
    return fallbackResponse;
  }
}

export const api = {
  student: {
    getStats: () => fetchData('student/stats.php', MOCK_STUDENT_STATS),
    getPerformance: () => fetchData('student/performance.php', MOCK_PERFORMANCE_DATA),
  },
  admin: {
    getStats: () => fetchData('admin/stats.php', MOCK_ADMIN_STATS),
    getRevenue: () => fetchData('admin/revenue.php', MOCK_REVENUE_DATA),
    getFinance: () => fetchData('admin/finance.php', MOCK_FINANCE_DATA),
    
    // Students CRUD
    getStudents: () => fetchData('admin/students.php', MOCK_STUDENTS_LIST),
    createStudent: (data: any) => mutateData('admin/students.php', 'POST', data, { ...data, id: Math.random() }),
    updateStudent: (id: number, data: any) => mutateData(`admin/students.php?id=${id}`, 'PUT', data, { ...data, id }),
    deleteStudent: (id: number) => mutateData(`admin/students.php?id=${id}`, 'DELETE', {}, { success: true }),

    // Batches CRUD
    getBatches: () => fetchData('admin/batches.php', MOCK_BATCHES_LIST),
    createBatch: (data: any) => mutateData('admin/batches.php', 'POST', data, { ...data, id: Math.random(), students: 0 }),
    updateBatch: (id: number, data: any) => mutateData(`admin/batches.php?id=${id}`, 'PUT', data, { ...data, id }),
    deleteBatch: (id: number) => mutateData(`admin/batches.php?id=${id}`, 'DELETE', {}, { success: true }),

    // Content CRUD (Mock)
    getGallery: () => fetchData('admin/gallery.php', [
      { id: 1, src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80", category: "Training" },
      { id: 2, src: "https://images.unsplash.com/photo-1593766827245-2968cc800974?w=800&q=80", category: "Match" },
      { id: 3, src: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&q=80", category: "Facilities" },
    ]),
    uploadImage: (data: any) => mutateData('admin/gallery.php', 'POST', data, { id: Math.random(), ...data }),
    deleteImage: (id: number) => mutateData(`admin/gallery.php?id=${id}`, 'DELETE', {}, { success: true }),

    getBlogs: () => fetchData('admin/blogs.php', [
      { id: 1, title: "Top 10 Batting Drills", author: "Vikram R.", date: "Oct 20, 2023", status: "Published" },
      { id: 2, title: "Mental Toughness in Cricket", author: "Sarah T.", date: "Oct 18, 2023", status: "Draft" },
    ]),
    createBlog: (data: any) => mutateData('admin/blogs.php', 'POST', data, { id: Math.random(), ...data, date: 'Just Now' }),
    deleteBlog: (id: number) => mutateData(`admin/blogs.php?id=${id}`, 'DELETE', {}, { success: true }),
  }
};
