<?php
// SMTP Configuration (Placeholder - Replace with actual credentials)
define('SMTP_HOST', 'smtp.example.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your_email@example.com');
define('SMTP_PASS', 'your_password');
define('SMTP_FROM', 'no-reply@escapemedia.in');
define('SMTP_FROM_NAME', 'Escape Media');

function sendEmail($to, $subject, $body) {
    // In a real environment, use PHPMailer or similar library
    // This is a basic mail() wrapper for structure
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: ' . SMTP_FROM_NAME . '<' . SMTP_FROM . '>' . "\r\n";
    
    return mail($to, $subject, $body, $headers);
}
?>
