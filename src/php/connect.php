<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "legitproject";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se a conexão foi bem-sucedida
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}



?>


