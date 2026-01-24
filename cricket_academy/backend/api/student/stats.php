<?php
include_once '../../config/db.php';
include_once '../cors.php';

// Mocking a logged in student ID
$student_id = 1;

$sql = "SELECT * FROM performance_stats WHERE student_id = :id ORDER BY match_date DESC LIMIT 5";
$stmt = $conn->prepare($sql);
$stmt->execute([':id' => $student_id]);
$stats = $stmt->fetchAll();

// If no real data, return structure expected by frontend
if(count($stats) == 0) {
    echo json_encode([
        ['label' => 'Batting Avg', 'value' => '0.0', 'icon' => 'TrendingUp', 'color' => 'bg-blue-500'],
        ['label' => 'Matches', 'value' => '0', 'icon' => 'Calendar', 'color' => 'bg-green-500']
    ]);
} else {
    echo json_encode($stats);
}
?>
