function multiplicarInteiros(n){
    var mult = 1;
  
    function verificarNumeros(n){
      return (typeof n === "number");
    }
    if(verificarNumeros(n)){
          for(var i = 1; i <= n; i++){
                mult = mult * i;  
        }
      return(mult);
    }
    else
      return;
  }
  
  console.log(multiplicarInteiros(5))