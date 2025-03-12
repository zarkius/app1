<?php
// filepath: c:\Users\diego\OneDrive\Desktop\NAMESPACE1\descarga_hostinger\web1\dbf.php

$servername = "fr-int-web1795.main-hosting.eu";
$username = "u363046794_zarkius";
$password = "#BElp3>L@t4D";
$dbname = "app1";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del POST
$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'];

// Insertar en la base de datos
$sql = "INSERT INTO app1 (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo "Correo electrónico guardado con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>