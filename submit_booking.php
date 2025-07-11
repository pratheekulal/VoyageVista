<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $destination = $_POST['destination'];
    $date = $_POST['date'];

    $sql = "INSERT INTO bookings (name, email, destination, date) VALUES ('$name', '$email', '$destination', '$date')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
                alert('Booking successful!');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
