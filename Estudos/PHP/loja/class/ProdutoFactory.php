<?php 

    class ProdutoFactory {

        private $classes = ["Ebook", "LivroFisico"];

        public function criaPor($tipoProduto, $params) {

            $nome = $params['nome'];
            $preco = $params['preco'];
            $descricao = $params['descricao'];
            $categoria = new Categoria();
            $usado = $params['usado'];

            if (in_array($tipoProduto, $this->classes)) {
                return new $tipoProduto($nome, $preco, $descricao, $categoria, $usado);
            }

            return new LivroFisico($nome, $preco, $descricao, $categoria, $usado);
        }
    }

?>