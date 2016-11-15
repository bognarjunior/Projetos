function ProdutosDAO (connection) {
	this._connection = connection;
}

ProdutosDAO.prototype.listar = function (callback) {
	var query = 'SELECT * FROM produtos';
	this._connection.query(query, callback);
};

ProdutosDAO.prototype.salvar = function (produto, callback) {
	var query = 'INSERT INTO produtos SET ?';
	this._connection.query(query, produto, callback);
};

module.exports = function () {
	return ProdutosDAO;
}