<?php
include_once '../../config/db.php';
include_once '../cors.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT s.*, b.name as batch_name FROM students s LEFT JOIN batches b ON s.batch_id = b.id";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll();
        echo json_encode($result);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"));
        if(!empty($data->name) && !empty($data->age)) {
            $sql = "INSERT INTO students (full_name, batch_id, status, fees_status) VALUES (:name, :batch, :status, :fees)";
            $stmt = $conn->prepare($sql);
            // Note: In a real app, you'd map batch name to ID
            $stmt->execute([
                ':name' => $data->name,
                ':batch' => 1, // Defaulting to 1 for demo
                ':status' => $data->status,
                ':fees' => $data->fees
            ]);
            echo json_encode(["message" => "Student created", "id" => $conn->lastInsertId()]);
        }
        break;

    case 'PUT':
        $id = isset($_GET['id']) ? $_GET['id'] : die();
        $data = json_decode(file_get_contents("php://input"));
        $sql = "UPDATE students SET full_name = :name, status = :status, fees_status = :fees WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':name' => $data->name,
            ':status' => $data->status,
            ':fees' => $data->fees,
            ':id' => $id
        ]);
        echo json_encode(["message" => "Student updated"]);
        break;

    case 'DELETE':
        $id = isset($_GET['id']) ? $_GET['id'] : die();
        $sql = "DELETE FROM students WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':id' => $id]);
        echo json_encode(["message" => "Student deleted"]);
        break;
}
?>
