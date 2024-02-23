<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["text"];

    // Set the recipient email address
    $to = "dravikumar4614@gmail.com";

    // Compose the email message
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $mailBody = "Name: $name<br>Email: $email<br>Subject: $subject<br><br>$message";

    // Send the email
    mail($to, $subject, $mailBody, $headers);
}
?>
