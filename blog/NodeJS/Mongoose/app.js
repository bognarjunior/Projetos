var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/blog');

var Author = mongoose.model('author', {nome: String, profissao: String});

var bognar = new Author({nome: 'Bognar', profissao :'Programador'});
var tite = new Author({nome: 'Tite', profissao :'Técnico de Futebol'});
var lemmy = new Author({nome: 'Lemmy Kilmister', profissao :'Musico'});
var astolfo = new Author({nome: 'Astolfo', profissao :'Programador'});

bognar.save(function (err) {
  	if (err) throw err;
  	console.log('Dados salvos com sucesso!');
});

tite.save(function (err) {
  	if (err) throw err;
  	console.log('Dados salvos com sucesso!');
});

lemmy.save(function (err) {
  	if (err) throw err;
  	console.log('Dados salvos com sucesso!');
});

astolfo.save(function (err) {
  	if (err) throw err;
  	console.log('Dados salvos com sucesso!');
});

Author.find(function (err, authors) {
  if (err) return console.error(err);
  console.log(authors);
})