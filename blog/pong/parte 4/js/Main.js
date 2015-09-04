function loadPage(){
    //Variável que guarda o elemento
    var canvas = document.getElementById("canvas");
    //Variável que define como desenhar no canvas
    var ctx = canvas.getContext("2d");

    //Objetos que aparecerão na tela
    var player, computer, ball;

    //Maiúsculas pois serão constantes, seu valores nunca mudarão
    var SPEEDPLAYER, SPEEDCOMPUTER, SPEEDBALL

    //Variaveis tempo
    var interval, acDelta, lastUpdateTime, msPerFrame, arrTimer,computerDelta, computerMSPerFrame;

    //HTML
    var lblScoreComputer, lblScorePlayer, lblStatus, btnRestar, arrStatus;

    //Pontos
    var playerScore, computerScore;

    //Game
    var gamePlay, gameInit, gameOver, gameWin;

    //Função principal
    function main(){
        //Funções para desenhar
        valuesVariables();
        instantiateObjects();
        gameLoop();
        controlKeyBoard();
    }
    //Função seta valores iniciais
    function valuesVariables () {

        //Limpando o teclado
        KeyBoard.DIRECTION.current = "";
        KeyBoard.ACTION.current = "";

        //Timmer
        acDelta = 0;
        lastUpdateTime = 0;
        msPerFrame = 30;

        SPEEDPLAYER = 15;
        SPEEDCOMPUTER = 15;
        SPEEDBALL = 6;

        computerDelta = 0;
        computerMSPerFrame = 250;
        //Status
        arrStatus = ["Iniciar","Jogando","Jogo Pausado","Parabéns Você Venceu","Game Over"];

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

    //Animação
    function gameLoop(){
        //enterFrame
        var deltaTime = Date.now() - lastUpdateTime;

        controlKeyBoard();

        draw();
        
        if ( gamePlay == true) {

            if (acDelta > msPerFrame) {
                acDelta = 0;
                moveBall();
                movePlayer();
                
            } else {
                acDelta += deltaTime;
            }

            if (computerDelta > computerMSPerFrame) {
                computerDelta = 0;
            } else {
                computerDelta += deltaTime;
            }

        }

        lastUpdateTime = Date.now();
        requestAnimFrame(gameLoop);
    };//gameLoop

    //Função para controlar o teclado
    function controlKeyBoard () {
        
        if (KeyBoard.ACTION.current != "") {
            playGame();
        } else {
            stopGame();
        };

    };

    //Função para iniciar o jogo
    function playGame () {
        gamePlay = true;
        gameInit = true;
    };//playGame

    //Função para parar o jogo
    function stopGame () {
        gamePlay = false;
    };//stopGame

    //Função que indica que o jogador perdeu
    function overGame () {
        KeyBoard.ACTION.current = "";
        gameOver = true;
        stopGame();
    };//overGame

    function winGame () {
        KeyBoard.ACTION.current = "";
        gameWin = true;
        stopGame();
    }
    function movePlayer(){

        if ( KeyBoard.DIRECTION.current != "" ) {
            player.move(KeyBoard.DIRECTION.current)
        };
    }

    function moveBall () {
        ball.move();
    }

    //RequestAnimationFrame
    requestAnimFrame = (function () {
        var func = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            window.oRequestAnimationFrame       ||
            window.msRequestAnimationFrame      ||
            function ( callback, element ) {
                window.setTimeout( callback, 1000 / this.fps ) ;
            };
            
        return function (callback, element) {
            func.apply(window, [callback, element]);
        };
    
    })();//RequestAnimationFrame

    main();
};//End function loadPage
window.load = loadPage();