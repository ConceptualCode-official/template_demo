

// --- Student Data ---
export const MOCK_STUDENT_STATS = [
  { label: 'Batting Avg', value: '45.2', icon: 'TrendingUp', color: 'bg-blue-500' },
  { label: 'Attendance', value: '92%', icon: 'Calendar', color: 'bg-green-500' },
  { label: 'Fitness Score', value: '8.5/10', icon: 'Activity', color: 'bg-orange-500' },
  { label: 'Man of Match', value: '3', icon: 'Award', color: 'bg-purple-500' },
];

export const MOCK_PERFORMANCE_DATA = {
  radar: [85, 70, 90, 80, 95, 75],
  attendance: [
    { value: 24, name: 'Present', itemStyle: { color: '#16a34a' } },
    { value: 2, name: 'Absent', itemStyle: { color: '#ef4444' } },
    { value: 4, name: 'Late', itemStyle: { color: '#f59e0b' } }
  ]
};

// --- Admin Data ---
export const MOCK_ADMIN_STATS = [
  { label: 'Total Students', value: '524', icon: 'Users', color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Monthly Revenue', value: '$24,500', icon: 'DollarSign', color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Active Batches', value: '12', icon: 'TrendingUp', color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'New Enquiries', value: '45', icon: 'UserPlus', color: 'text-orange-600', bg: 'bg-orange-50' },
];

export const MOCK_REVENUE_DATA = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: [12000, 13200, 10100, 13400, 19000, 23000, 21000]
};

export const MOCK_STUDENTS_LIST = [
  { id: 1, name: 'Amit Kumar', batch: 'Batch A', age: 16, status: 'Active', fees: 'Paid' },
  { id: 2, name: 'Rahul Singh', batch: 'Batch B', age: 14, status: 'Active', fees: 'Pending' },
  { id: 3, name: 'Priya Sharma', batch: 'Batch A', age: 17, status: 'Inactive', fees: 'Paid' },
  { id: 4, name: 'David John', batch: 'Batch C', age: 12, status: 'Active', fees: 'Paid' },
  { id: 5, name: 'Sneha Patel', batch: 'Batch B', age: 15, status: 'Active', fees: 'Overdue' },
  { id: 6, name: 'Karan Mehra', batch: 'Batch A', age: 15, status: 'Active', fees: 'Paid' },
  { id: 7, name: 'Zara Khan', batch: 'Batch C', age: 13, status: 'Active', fees: 'Paid' },
];

export const MOCK_BATCHES_LIST = [
  { id: 1, name: 'Morning Elite (U-19)', time: '06:00 AM - 09:00 AM', coach: 'Vikram R.', students: 24, capacity: 30 },
  { id: 2, name: 'Evening Junior (U-14)', time: '04:00 PM - 06:30 PM', coach: 'Sarah T.', students: 18, capacity: 25 },
  { id: 3, name: 'Weekend Warriors', time: 'Sat-Sun 07:00 AM', coach: 'Mike H.', students: 45, capacity: 50 },
  { id: 4, name: 'Summer Camp A', time: '08:00 AM - 11:00 AM', coach: 'Brett L.', students: 28, capacity: 40 },
];

export const MOCK_FINANCE_DATA = {
  revenue: [12000, 15000, 18000, 16000, 21000, 24000],
  expenses: [8000, 9000, 10000, 9500, 12000, 13000],
  summary: {
    ytd: '$106,000',
    pending: '$4,500',
    profit: '$42,500'
  }
};
