<?php 
	require_once("cabecalho.php");
	require_once("logica-usuario.php");

	verificaUsuario();

	$tipoProduto = $_POST['tipoProduto'];
	$categoria_id = $_POST['categoria_id'];

	$factory = new ProdutoFactory();
	$produto = $factory->criaPor($tipoProduto, $_POST);
	$produto->atualizaBaseadoEm($_POST);

	$produto->getCategoria()->setId($categoria_id);

	if(array_key_exists('usado', $_POST)) {
	    $produto->setUsado("true");
	} else {
	    $produto->setUsado("false");
	}

	$produtoDao = new ProdutoDao($conexao);

	if($produtoDao->insereProduto($produto)) {
?>
		<p class="text-success">O produto <?= $produto->getNome() ?>, <?= $produto->getPreco() ?> foi adicionado.</p>
<?php 
	} else {
		$msg = mysqli_error($conexao);
?>
		<p class="text-danger">O produto <?= $produto->getNome() ?> não foi adicionado: <?= $msg?></p>
<?php
	}
?>

<?php include("rodape.php"); ?>