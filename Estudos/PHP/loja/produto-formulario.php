<?php
	require_once("cabecalho.php");
	require_once("logica-usuario.php");

	verificaUsuario();
	
	$categoria = new Categoria();
	$categoria->setId("1");

	$produto = new LivroFisico("", "", "", $categoria, "");
	$categoriaDao = new CategoriaDao($conexao);

	$categorias = $categoriaDao->listaCategorias();
?>	

<h1>Formulário de produto</h1>
<form action="adiciona-produto.php" method="post">
	<table class="table">
		
		<?php include("produto-formulario-base.php"); ?>

		<tr>
			<td colspan="2">
				<button class="btn btn-primary" type="submit">Cadastrar</button>
			</td>
		</tr>
	</table>
</form>

<?php include("rodape.php"); ?>