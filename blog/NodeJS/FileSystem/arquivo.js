var fs = require('fs');

fs.readFile('./arquivos/linguagens.txt', 'utf-8', function (err, data) {
	if(err) throw err;
	console.log(data);
});

fs.writeFile('./arquivos/message.txt', 'Hello World!\n',{encoding :'utf-8',flag:'a'}, function (err) {
  if (err) throw err;
  console.log('Arquivo salvo!');
});