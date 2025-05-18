<?php
session_start();

if (!isset($_SESSION['email'])) {
    header("Location:../pages/login.html");
    exit();
}
?>

<h2>Welcome, <?php echo $_SESSION['email']; ?>!</h2>
<p>You have successfully signed in.</p>
google