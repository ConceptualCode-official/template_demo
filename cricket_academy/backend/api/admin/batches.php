<?php
include_once '../../config/db.php';
include_once '../cors.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM batches";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        $sql = "INSERT INTO batches (name, timing, capacity) VALUES (:name, :time, :cap)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':name' => $data->name,
            ':time' => $data->time,
            ':cap' => $data->capacity
        ]);
        echo json_encode(["message" => "Batch created"]);
        break;
}
?>
