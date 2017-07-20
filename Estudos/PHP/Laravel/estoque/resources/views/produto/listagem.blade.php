@extends('layout.principal')

@section('conteudo')
    
<h1>Listagem de produtos</h1>
    @if(empty($produtos))

        <div class="alert alert-danger">
            Não existem produtos cadastrados.
        </div>

    @else
        <table class="table table-striped table-hover">
            <tr>
                <td>Nome</td>
                <td>Valor</td>
                <td>Quantidade</td>
                <td>Tamanho</td>
                <td>Descrição</td>
                <td>Categoria</td>
                <td>Detalhes</td>
            </tr>
            @foreach ($produtos as $p)
                <tr class="{{$p->quantidade<=1 ? 'danger' : '' }}">
                    <td>
                        {{$p->nome}}
                    </td>
                    <td>
                        {{$p->valor}}
                    </td>
                    <td>
                        {{$p->quantidade}}
                    </td>
                    <td> 
                        {{ $p->tamanho }}
                    </td>
                    <td>
                        {{$p->descricao}}
                    </td>
                    <td> 
                        {{ $p->categoria->nome }}
                    </td>
                    <td>
                        <a href="/produto/mostra/{{$p->id}}">
                            Visualizar
                        </a>
                    </td>
                </tr>
            @endforeach
        </table>
    @endif
    <h4>
        <span class="label label-danger pull-right">
            Um ou menos itens no estoque
        </span>
    </h4>
    
    @if(old('nome') && old('id'))
        <div class="alert alert-danger">
            <strong>Sucesso!</strong> 
            O produto {{ old('nome') }} foi deletado.
        </div>
    @elseif(old('nome'))
        <div class="alert alert-success">
            <strong>Sucesso!</strong> 
            O produto {{ old('nome') }} foi adicionado.
        </div>
    @endif
@stop