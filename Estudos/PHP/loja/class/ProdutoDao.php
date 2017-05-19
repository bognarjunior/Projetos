<?php  

	class ProdutoDao {
		
		function __construct($conexao){
			$this->conexao = $conexao;
		}

		private $conexao;

		function listaProdutos() {

			$produtos = array();
			$query = "
				select 
					p.*,
					c.nome as categoria_nome 
				from 
					produtos as p 
				join 
					categorias as c on c.id=p.categoria_id";

			$resultado = mysqli_query($this->conexao, $query);

			while($produto_array = mysqli_fetch_assoc($resultado)) {
				
				$tipoProduto = $produto_array['tipoProduto'];
		        $produto_id = $produto_array['id'];
		        $categoria_nome = $produto_array['categoria_nome'];

		        $factory = new ProdutoFactory();
		        $produto = $factory->criaPor($tipoProduto, $produto_array);
		        $produto->atualizaBaseadoEm($produto_array);

		        $produto->setId($produto_id);
		        $produto->getCategoria()->setNome($categoria_nome);

		        array_push($produtos, $produto);
			}

			return $produtos;
		}

		function insereProduto(Produto $produto) {

			$isbn = "";
		    if($produto->temIsbn()) {
		        $isbn = $produto->getIsbn();
		    }

		    $waterMark = "";
		    if($produto->temWaterMark()) {
		        $waterMark = $produto->getWaterMark();
		    }

		    $taxaImpressao = "";
		    if($produto->temTaxaImpressao()) {
		        $taxaImpressao = $produto->getTaxaImpressao();
		    }

		    $usado = 'false';
		    if ($produto->getUsado()) {
		    	$usado = true;
		    }

		    $tipoProduto = get_class($produto);

			$query = "
				insert into produtos (
					nome, 
					preco, 
					descricao, 
					categoria_id, 
					usado,
					isbn,
					tipoProduto
				) values (
					'{$produto->getNome()}', 
					{$produto->getPreco()}, 
					'{$produto->getDescricao()}', 
					{$produto->getCategoria()->getId()}, 
					{$usado},
					'{$isbn}', 
					'{$tipoProduto}',
					'{$waterMark}', 
					'{$taxaImpressao}'
				)";

			return mysqli_query($this->conexao, $query);
		}

		function alteraProduto(Produto $produto) {

			$isbn = "";
		    if($produto->temIsbn()) {
		        $isbn = $produto->getIsbn();
		    }

		    $waterMark = "";
		    if($produto->temWaterMark()) {
		        $waterMark = $produto->getWaterMark();
		    }

		    $taxaImpressao = "";
		    if($produto->temTaxaImpressao()) {
		        $taxaImpressao = $produto->getTaxaImpressao();
		    }

		    $usado = 'false';
		    if ($produto->getUsado()) {
		    	$usado = true;
		    }

		    $tipoProduto = get_class($produto);

			$query = "
				update 
					produtos 
				set 
					nome = '{$produto->getNome()}', 
					preco = {$produto->getPreco()}, 
					descricao = '{$produto->getDescricao()}', 
					categoria_id= {$produto->getCategoria()->getId()}, 
					usado = {$usado},
					isbn = '{$isbn}',
					tipoProduto = '{$tipoProduto}',
					waterMark = '{$waterMark}', 
                    taxaImpressao = '{$taxaImpressao}' 
				where 
					id = '{$produto->getId()}'";

			return mysqli_query($this->conexao, $query);
		}

		function buscaProduto($id) {

			$query = "
				select 
					* 
				from 
					produtos 
				where 
					id = {$id}";

			$resultado = mysqli_query($this->conexao, $query);
			$produto_array = mysqli_fetch_assoc($resultado);

			$tipoProduto = $produto_array['tipoProduto'];
		    $produto_id = $produto_array['id'];
		    $categoria_id = $produto_array['categoria_id'];

		    $factory = new ProdutoFactory();
		    $produto = $factory->criaPor($tipoProduto, $produto_array);
		    $produto->atualizaBaseadoEm($produto_array);

		    $produto->setId($produto_id);
		    $produto->getCategoria()->setId($categoria_id);

		    return $produto;
		}

		function removeProduto($id) {

			$query = "delete from produtos where id = {$id}";

			return mysqli_query($this->conexao, $query);
		}
	}
?>