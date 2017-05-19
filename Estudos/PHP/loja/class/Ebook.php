<?php
	class Ebook extends Livro {

	    private $waterMark;

	    public function getWaterMark() {
	        return $this->waterMark;
	    }

	    public function setWaterMark($waterMark) {
	        $this->waterMark = $waterMark;
	    }

	    public function atualizaBaseadoEm($params) {
	        $this->setIsbn($params["isbn"]);
	        $this->setWaterMark($params["waterMark"]);
	    }

	}
?>