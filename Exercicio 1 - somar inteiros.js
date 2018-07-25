function somarInteiros(n){
  var soma = 0;

  function verificarNumeros(n){
    return (typeof n === "number");
  }
  if(verificarNumeros(n)){
    for(var i = 1; i <= n; i++){
      soma += i;
    }
    return(soma);
  }
  else
    return;
}

console.log(somarInteiros(5))