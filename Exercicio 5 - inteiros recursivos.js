function verificarNumeros(n){
  return (typeof n === "number");
}

function somarInteiros(n){
    var soma = 0;
    if(verificarNumeros(n)){
      for(var i = n; i >= 0; i--){
        soma += i;
      }
      return(soma);
    }
    else
      return;
  }
  

  function somarImpares(n){
    var soma = 0;
    var impar = 1;
  
    if(verificarNumeros(n)){
          for(var i = n; i > 0; i--){
                soma = soma + impar ; 
                impar = impar + 2;   
        }
      return(soma);
    }
    else
      return;
  }
  

  function multiplicarInteiros(n){
    var mult = 1;
  
    if(verificarNumeros(n)){
          for(var i = n; i > 0; i--){
                mult = mult * i;  
        }
      return(mult);
    }
    else
      return;
  }
  
  console.log(somarInteiros(100000))

  console.log(somarImpares(10))

  console.log(multiplicarInteiros(5))
