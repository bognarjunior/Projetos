<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Controle de Estoque</title>
	<link href="/css/app.css" rel="stylesheet">
	<link href="/css/custom.css" rel="stylesheet">
</head>
<body>
	<div class="container"> 
		<nav class="navbar navbar-default">
		    <div class="container-fluid">

			    <div class="navbar-header">      
			      	<a class="navbar-brand" href="/produtos">Estoque Laravel</a>
			    </div>

			    <ul class="nav navbar-nav navbar-right">
			        <li><a href="{{action('ProdutoController@lista')}}">Listagem</a></li>
			        <li><a href="{{action('ProdutoController@novo')}}">Cadastrar</a></li>
			    </ul>

		    </div>
	  	</nav>
		@yield('conteudo')
		<footer class="footer">
      		<p>© Livro de Laravel do Alura.</p>
  		</footer>
    </div>
</body>
</html>