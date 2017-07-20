@extends('layout.principal')

@section('conteudo')
<h1>Detalhes do produto: {{$p->nome}} </h1>
<ul>
	<li>
		<b>Valor:</b> R$ {{$p->valor}} 
	</li>
	<li>
		<b>Quantidade em estoque:</b> {{$p->quantidade}}
	</li>
	<li>
		<b>Tamanho:</b> {{$p->tamanho}}
	</li>
	<li>
		<b>Descrição:</b> {{$p->descricao}} 
	</li>
	<li>
		<b>Categoria:</b> {{$p->categoria->nome}} 
	</li>
</ul>	
<a href="{{action('ProdutoController@buscar', $p->id)}}" class="btn btn-primary">
	Alterar
</a>
<a href="{{action('ProdutoController@deletar', $p->id)}}" class="btn btn-danger">
	Excluir
</a>
@stop