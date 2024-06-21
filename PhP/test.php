<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar Arquivo</title>
    <style> 
        input{
            padding: 10px;
            font-size: 18px;
        }
    </style>

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
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    include('conexao.php');

    // Verifique se os dados foram enviados via POST
    if (isset($_POST['nome_usuario']) && isset($_FILES['pdf_arquivo'])) {
        $nome_usuario = $_POST['nome_usuario'];
        $conteudo_pdf = file_get_contents($_FILES['pdf_arquivo']['tmp_name']);

        // Preparar a consulta SQL
        $stmt = $conn->prepare("INSERT INTO documento(nome_usuario, pdf_arquivo) VALUES (?, ?)");
        
        // Verificar se a preparação da consulta foi bem sucedida
        if ($stmt === false) {
            echo "Erro na preparação da consulta: " . $conn->error;
        } else {
            // Vincular parâmetros e tipos
            $stmt->bind_param("ss", $nome_usuario, $conteudo_pdf);
            
            // Executar a consulta
            if ($stmt->execute()) {
                echo "Dados inseridos com Sucesso!";
            } else {
                echo "Erro ao inserir dados: " . $stmt->error;
            }
            
            // Fechar o statement
            $stmt->close();
        }

        // Fechar a conexão com o banco de dados
        $conn->close();
    } else {
        echo "Dados incompletos enviados via POST.";
    }
}
?>


</body>
</html>