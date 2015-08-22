function loadPage(){
    //Variável que guarda o elemento
    var canvas = document.getElementById("canvas");
    //Variável que define como desenhar no canvas
    var ctx = canvas.getContext("2d");

    //Objetos que aparecerão na tela
    var player, computer, ball;

    //Maiúsculas pois serão constantes, seu valores nunca mudarão
    var SPEEDPLAYER, SPEEDCOMPUTER, SPEEDBALL

    main();
    //Função principal
    function main(){
        //Funções para desenhar
        valuesVariables();
        instantiateObjects();
        draw();
    }
    //Função seta valores iniciais
    function valuesVariables () {
        SPEEDPLAYER = 15;
        SPEEDCOMPUTER = 15;
        SPEEDBALL = 6;

        //Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }

    //Função para instanciar os objetos
    function instantiateObjects(){
        player = "";
        computer = "";
        ball = "";

        //setando os jogadores
        player = new Player({
            "x" : 0,            
            "y" : (canvas.height - 90) / 2,         
            "w" : 10,           
            "h" : 90,
            "limit" : canvas.height,            
            "speed" : SPEEDPLAYER       
        });

        computer = new Player({
            "x" : (canvas.width - 10),
            "y" : (canvas.height - 90) / 2,
            "w" : 10,
            "h" : 90,
            "limit" : canvas.height,
            "speed" : SPEEDCOMPUTER
        });

        ball = new Ball({
            "x" : ( canvas.width / 2 ),
            "y" : ( canvas.height /2 ),
            "r" : 10,
            "a" : ( Math.floor(Math.random() * 6) - 3 ),
            "speed" : SPEEDBALL
        });
        
    }

    //Função para desenhar 
    function draw () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        computer.draw(ctx);
        player.draw(ctx);
        ball.draw(ctx);
        drawMiddleRow();
    }

    function drawMiddleRow(){
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();
    };

};//End function loadPage
window.load = loadPage();