<?php 
	/**
	* 
	*/
	abstract class Produto {
		
		private $id;
		private $nome;
		private $preco;
		private $descricao;
		private $categoria;
		private $usado;

		function __construct($nome, $preco, $descricao, Categoria $categoria, $usado){
			$this->nome = $nome;
			$this->preco = $preco;
			$this->descricao = $descricao;
			$this->categoria = $categoria;
			$this->usado = $usado;
		}
		
		public function getId() {
			return $this->id;
		}

		public function setId($value) {
			$this->id = $value;
		}

		public function getNome() {
			return $this->nome;
		}

		public function setNome($value) {
			$this->nome = $value;
		}

		public function getPreco() {
			return $this->preco;
		}

		public function setPreco($value) {
			$this->preco = $value;
		}

		public function getDescricao() {
			return $this->descricao;
		}

		public function setDescricao($value) {
			$this->descricao = $value;
		}

		public function getCategoria() {
			return $this->categoria;
		}

		public function setCategoria($value) {
			$this->categoria = $value;
		}

		public function getUsado() {
			return $this->usado;
		}

		public function setUsado($value) {
			$this->usado;
		}

		public function precoComDesconto($value = 0.1){
			if ($value > 0 && $value <= 0.5) {
				$this->preco -= $this->preco * $value;
			}
			return $this->preco;
		}

		public function calculaImposto() {
		    return $this->preco * 0.195;
		}

		public function temIsbn(){
			return $this instanceof Livro;
		}

		public function temTaxaImpressao() {
		    return $this instanceof LivroFisico;
		}

		public function temWaterMark() {
		    return $this instanceof Ebook;
		}

		abstract function atualizaBaseadoEm($params);

		function __toString() {
			return $this->nome . ": R$" . $this->preco;
		}
	}
?>