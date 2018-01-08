String.prototype.soletrar = function(){
    console.log( this.replace('-', '').toLocaleUpperCase().split("").join("-"));
}
"programador".soletrar();
"guarda-chuva".soletrar();