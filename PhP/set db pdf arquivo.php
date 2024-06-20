<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar Documentos</title>
    <style>
        input {

            padding: 10px;
            font-size: 20px;

        }
    </style>

</head>

<body>
    <h2>Enviar Aquivo</h2>
    <hr>
    <div class="form">
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="text" name="nome_usuario" placeholder="Digite Seu Nome" required><br>
            <input type="file" name="pdf_arquivo" accept=".pdf" required><br>
            <input type="submit" value="Gravar PDF">
        </form>
    </div>
    <hr>

    <?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include('conexao.php'); // Verifique se esse arquivo contém a conexão $conn correta

    $nome_usuario = $_POST['nome_usuario']; // Corrigido para $_POST
    $conteudo_pdf = file_get_contents($_FILES['pdf_arquivo']['tmp_name']);

    // Inserir no banco de dados
    $stmt = $conn->prepare("INSERT INTO documento (nome_usuario, pdf) VALUES (?, ?)");
    $stmt->bind_param("ss", $nome_usuario, $conteudo_pdf);

    if ($stmt->execute()) {
        echo "Dados inseridos com sucesso!";
    } else {
        echo "Erro ao inserir dados: " . $stmt->error;
    }

    // Fechar conexão
    $stmt->close();
    $conn->close();
}
?>

</body>

</html>