<?php 
    namespace estoque\Http\Controllers;
    
    use Illuminate\Support\Facades\DB;
    use estoque\Produto;
    use estoque\Categoria;
    use Request;
    use Validator;
    use estoque\Http\Requests\ProdutosRequest;
    
    /**
    * 
    */
    class ProdutoController extends Controller {
        public function lista() {
            $produtos = Produto::all();
            return view('produto.listagem')->with('produtos', $produtos);
            //return view('listagem')->withProdutos($produtos);
        } 

        public function listaJson(){
            $produtos = Produto::all();
            return response()->json($produtos);
        }

        public function mostra($id){
            $produto = Produto::find($id);

            if(empty($produto)) {
                return "Esse produto não existe";
            }
            return view('produto.detalhes')->with('p', $produto);
        }

        public function novo(){
            return view('produto.formulario')->with('categorias', Categoria::all());
        }

        public function adiciona(ProdutosRequest $request){
            Produto::create($request->all());
            return redirect()->action('ProdutoController@lista')->withInput(Request::only('nome'));
        }

        public function deletar($id){
            $produto = Produto::find($id);
            $produto->delete();
            return redirect()->action('ProdutoController@lista');
        }

        public function buscar($id) {
            $produto = Produto::find($id);
            return view('produto/formularioAltera')->with('p', $produto)->with('categorias', Categoria::all());
        }

        public function alterar(Request $request, $id){
            $produto = Produto::find($id);
            $params = Request::all();
            $produto->fill($params)->save();
            return redirect()->action('ProdutoController@lista');
        }
    }