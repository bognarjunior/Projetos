<?php  

	class CategoriaDao {

		private $conexao;

		function __construct($conexao){
			$this->conexao = $conexao;	
		}

		function listaCategorias() {

			$categorias = array();
			$query = "
				select 
					* 
				from 
					categorias";

			$resultado = mysqli_query($this->conexao, $query);

			while($categoria_array = mysqli_fetch_assoc($resultado)) {

				$categoria = new Categoria();
				$categoria->setId($categoria_array['id']);
				$categoria->setNome($categoria_array['nome']);

				array_push($categorias, $categoria);
			}

			return $categorias;
		}
	}
?>