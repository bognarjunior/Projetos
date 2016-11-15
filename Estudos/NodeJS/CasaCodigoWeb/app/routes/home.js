module.exports = function(app) {
    app.get("/",function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtos = new app.infra.ProdutosDAO(connection);

        produtos.listar(function(error,results,fields){
            res.render('home/index',{livros:results});
        });
        connection.end();
    });
}