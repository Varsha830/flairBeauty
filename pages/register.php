<?php
include "../php/config.php";

$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Check if passwords match
if ($password !== $confirm_password) {
    die("Passwords do not match.");
}

// Hash the password
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Check if email already exists
$sql = "SELECT * FROM users WHERE email=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    die("Email already registered.");
}

// Insert into database
$insert_sql = "INSERT INTO users (email, password) VALUES (?, ?)";
$insert_stmt = $conn->prepare($insert_sql);
$insert_stmt->bind_param("ss", $email, $hashed_password);

if ($insert_stmt->execute()) {
    echo "Registration successful. <a href='../pages/login.html'>Login here</a>";
} else {
    echo "Error: " . $conn->error;
}
?>
