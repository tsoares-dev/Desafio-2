const printArray = () => {
  let quantidade = document.getElementById('campo1').value;
  let valorMin = document.getElementById('campo2').value;
  let valorMax = document.getElementById('campo3').value;

  if(valorMin < valorMax && (valorMax-valorMin) >= quantidade){
  let recebe = [valorMin,valorMax];

  for(var i = 1; i <= quantidade-2; i++){
  recebe.push(Math.round(Math.random() * (valorMax - valorMin) + Number(valorMin)));
  }
  let ordem = recebe.sort((a,b) => {
  return a-b
  })
  
  let result = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = ordem
  } else{
  let result1 = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = "Valores invalidos"
  }
}