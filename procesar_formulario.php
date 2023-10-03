<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $ciudad = $_POST["ciudad"];
    $direccion = $_POST["direccion"];
    $telefono = $_POST["telefono"];

    // Envía el correo electrónico a tu dirección de correo
    $to = "javrparatodos@gmail.com";
    $subject = "Nuevo formulario de contacto";
    $message = "Nombre: $nombre\nCiudad: $ciudad\nDirección: $direccion\nTeléfono: $telefono";
    
    mail($to, $subject, $message);
}
?>