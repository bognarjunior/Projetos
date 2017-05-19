<?php  
	abstract class Livro extends Produto {
		
		private $isbn;

		public function getIsbn() {
			return $this->isbn;
		}

		public function setIsbn($value) {
			$this->isbn = $value;
		}

		public function calculaImposto() {
	        return $this->getPreco() * 0.065;
	    }
	}
?>