<?php
require_once("cabecalho.php");
require_once("logica-usuario.php");

$id = $_POST['id'];
$produtoDao = new ProdutoDao($conexao);

$produtoDao->removeProduto($id);

$_SESSION["success"] = "Produto removido com sucesso.";
header("Location: produto-lista.php");
die();

?>