function loadPage(){
    //Variável que guarda o elemento
    var canvas = document.getElementById("canvas");
    //Variável que define como desenhar no canvas
    var ctx = canvas.getContext("2d");

    //Funções para desenhar
    drawMiddleRow();
    drawPlayer();
    drawEnemy();
    drawBall();

    function drawMiddleRow(){
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        ctx.closePath();
    };

    function drawPlayer(){
        ctx.beginPath();
        ctx.fillStyle = "#000000"
        ctx.fillRect( 0, (canvas.height - 90) / 2, 10, 90 );
        ctx.closePath();
    };

    function drawBall(){
        ctx.fillStyle = "#000000"
        ctx.beginPath();
        ctx.arc(( canvas.width / 2 ), ( canvas.height /2 ), 10, 0, Math.PI * 2); 
        ctx.closePath();
        ctx.fill();
    };

    function drawEnemy(){
        ctx.beginPath();
        ctx.fillStyle = "#000000"
        ctx.fillRect( (canvas.width - 10), (canvas.height - 90) / 2, 10, 90 );
        ctx.closePath();
    };

};//End function loadPage
window.load = loadPage();