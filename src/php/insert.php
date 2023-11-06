<?php

require("connect.php");


// Receber dados do formulário
$username = $_POST['usuario'];
$password = $_POST['senha'];

// Consulta para verificar se o usuário existe no banco
$sql = "SELECT * FROM cliente WHERE USERNAME = '$username' and SENHA = '$password'";


$result = mysqli_query($conn, $sql);

// Verificar resultado da consulta
if (mysqli_num_rows($result) > 0) {
    // Usuário encontrado, direcionar para a página restrita
    header("location: social");
} else {
    // Usuário não encontrado, mostrar mensagem de erro
    echo "Usuário ou senha inválido";
}

// Fechar conexão
mysqli_close($conn);