var nodemailer = require('nodemailer');

var $usuario = 'seu email aqui @gmail.com';
var $senha = 'sua senha aqui';  

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: $usuario,
        pass: $senha
    }
});

var $destinatario = 'bognar_junior@yahoo.com.br';

var mailOptions = {
    from: $usuario,
    to: $destinatario,
    subject: 'Enviando um email pelo Node.js',
    text: 'Muito fácil enviar um email pelo node, tente você também!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
});