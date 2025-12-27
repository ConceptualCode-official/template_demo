<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once '../config.php';
require_once '../mail_config.php';

$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->name) &&
    !empty($data->email) &&
    !empty($data->message)
){
    try {
        $query = "INSERT INTO bookings (name, email, phone, project_type, budget, message) VALUES (:name, :email, :phone, :project_type, :budget, :message)";
        $stmt = $pdo->prepare($query);
        
        $stmt->bindParam(":name", $data->name);
        $stmt->bindParam(":email", $data->email);
        $stmt->bindParam(":phone", $data->phone); // Optional
        $stmt->bindParam(":project_type", $data->project_type);
        $stmt->bindParam(":budget", $data->budget);
        $stmt->bindParam(":message", $data->message);
        
        if($stmt->execute()){
            // Send Confirmation Email to User
            $userSubject = "Booking Received - Escape Media";
            $userBody = "<h1>Hi " . htmlspecialchars($data->name) . ",</h1><p>We have received your project inquiry. Our team will review it and get back to you within 24 hours.</p>";
            sendEmail($data->email, $userSubject, $userBody);

            // Send Notification to Admin
            $adminSubject = "New Booking: " . htmlspecialchars($data->name);
            $adminBody = "<p>New project inquiry from " . htmlspecialchars($data->name) . " (" . htmlspecialchars($data->email) . ")</p>";
            sendEmail(SMTP_USER, $adminSubject, $adminBody);

            http_response_code(201);
            echo json_encode(array("message" => "Booking created successfully."));
        } else {
            http_response_code(503);
            echo json_encode(array("message" => "Unable to create booking."));
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(array("message" => "Error: " . $e->getMessage()));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>
