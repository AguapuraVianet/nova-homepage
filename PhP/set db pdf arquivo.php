<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar Arquivo</title>

</head>

<body>
    <h2>Enviar Arquivo</h2>  
    <hr>
    <div class="form">
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="text" name="nome_usuario" placeholder="Digite seu Nome" required><br>
            <input type="file" name="pdf_arquivo" accept=".pdf" required><br>
            <input type="submit" value="Gravar PDF">
        </form>
    </div>
    <hr>

<?php
if ($_SERVER['REQUEST_METHOD']=='POST'){
    $nome_cliente = $_POST['nome_usuario'];
    $conteudo_pdf = file_get_contents($_FILES['pdf_arquivo']['tmp_name']);


//inserir no banco de dados

$sql = "INSERT INTO `documento`(`nome_cliente`, `pdf_arquivo`) VALUES (?, ?)";
$stmt = $conn -> prepare ($sql);
$stmt -> bind_param("ss", $nome_cliente, $conteudo_pdf);

if($stmt -> execute())
   
    {
      echo "Record inserted successfully.";
      // block of code to process further
   
    }else
   {
    echo "Record Error.".$stmt -> error;
    // block of code to process further
 }

$stmt->close(); 
$conn->close();

}

?> 

</body>
</html>