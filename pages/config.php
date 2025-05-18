<?php
$host = "localhost";
$user = "root";
$password = "pass123";
$dbname = "skincare_ecom";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
