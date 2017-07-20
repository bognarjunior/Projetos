@extends('layout.principal')

@section('conteudo')
<h1 class="center">Atualizar produto: {{$p->id}}</h1>
<form action="/produtos/alterar/{{$p->id}}" method="post">

    <input type="hidden" name="_token" value="{{csrf_token()}}">

    <div class="form-group">
        <label>Nome</label>
        <input id="nome" name="nome" class="form-control" value="{{ $p->nome }}" >
    </div>

    <div class="form-group">
        <label>Valor</label>
        <input id="valor" name="valor" class="form-control" value="{{$p->valor}}">
    </div>

    <div class="form-group">
        <label>Quantidade</label>
        <input id="quantidade" name="quantidade" class="form-control" type="number" value="{{$p->quantidade}}">
    </div>

    <div class="form-group">
        <label>Descrição</label>
        <input id="descricao" name="descricao" class="form-control" value="{{ $p->descricao }}" >
    </div>
    <div class="form-group">
        <label>Tamanho</label>
        <input id="tamanho" name="tamanho" class="form-control" value="{{ $p->tamanho }}" >
    </div>
    <div class="form-group">
        <label>Categoria</label>
        <select name="categoria_id" class="form-control">
            @foreach($categorias as $c)
                <option value="{{$c->id}}">{{$c->nome}}</option>
            @endforeach
        </select>
    </div>
    <button type="submit" class="btn btn-primary">Atualizar</button>

</form>
@stop