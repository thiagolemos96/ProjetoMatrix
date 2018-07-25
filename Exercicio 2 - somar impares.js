function somarImpares(n){
  var soma = 0;
  var impar = 1;

  function verificarNumeros(n){
    return (typeof n === "number");
  }
  if(verificarNumeros(n)){
        for(var i = 0; i < n; i++){
              soma = soma + impar ; 
              impar = impar + 2;   
      }
    return(soma);
  }
  else
    return;
}

console.log(somarImpares(6))