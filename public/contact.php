<?php
// Hostinger Contact Form & Reservation Handler
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : "";
    $date = isset($_POST["date"]) ? trim($_POST["date"]) : "";
    $subject_input = isset($_POST["subject"]) ? trim($_POST["subject"]) : "Website Request";
    $message = isset($_POST["message"]) ? trim($_POST["message"]) : "";
    $hear_about = isset($_POST["hear_about"]) ? trim($_POST["hear_about"]) : "";

    if (empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "<script>alert('Oops! There was a problem with your submission. Please try again.'); window.history.back();</script>";
        exit;
    }

    $recipient = "dmc@shemstravel.com";
    $subject = "New Request from Shems Website: $subject_input";
    
    // Email content to DMC
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    if($phone) $email_content .= "Phone: $phone\n";
    if($date) $email_content .= "Requested Date: $date\n";
    if($hear_about) $email_content .= "Heard About Us: $hear_about\n";
    $email_content .= "\nMessage:\n$message\n";
    
    $email_headers = "From: $name <$email>";
    
    // Confirmation email to client
    $client_subject = "Thank you for contacting Shems Incoming Morocco!";
    $client_message = "
    <html>
    <head>
    <style>
      body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
      h2 { color: #f26422; }
      .footer { margin-top: 30px; font-size: 0.9em; color: #777; }
    </style>
    </head>
    <body>
      <h2>Hello $name,</h2>
      <p>Thank you for reaching out to Shems Incoming Morocco.</p>
      <p>We have received your request regarding <strong>$subject_input</strong> and our dedicated team will get back to you as soon as possible.</p>
      <p>We look forward to curating an unforgettable experience for you.</p>
      <p>Best regards,</p>
      <div class='footer'>
        <strong>Shems Incoming Morocco Team</strong><br>
        Bd de la corniche, résidence le yacht immeuble A 4ème étage, Apt 131 - Casablanca<br>
        +212 (0) 5 22 24 52 70 / 43<br>
        dmc@shemstravel.com
      </div>
    </body>
    </html>
    ";
    
    $client_headers = "MIME-Version: 1.0" . "\r\n";
    $client_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $client_headers .= "From: Shems Incoming Morocco <dmc@shemstravel.com>" . "\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Send auto-reply to client
        mail($email, $client_subject, $client_message, $client_headers);
        echo "<script>alert('Thank You! Your message has been sent successfully. We will be in touch shortly.'); window.location.href='/';</script>";
    } else {
        echo "<script>alert('Oops! Something went wrong and we couldn\'t send your message.'); window.history.back();</script>";
    }
} else {
    echo "<script>alert('There was a problem with your submission, please try again.'); window.history.back();</script>";
}
?>
