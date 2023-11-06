
<?php

// session_start();
require("connect.php");

$username = $_POST['username'];
$email = $_POST['email'];
$senha = $_POST['password'];

echo  $email, $senha, $username, "styl";



$sql1 = "INSERT INTO legitproject (EMAIL, SENHA, USERNAME,);
VALUES ('$email', '$senha', '$nome' )";


if ($conn->query($sql1) === TRUE ) {

    
    header("location: login");
} else {
    echo "Erro ao inserir dados: " . $conn->error;
    header("location: registro");
}

$conn->close();

?>



