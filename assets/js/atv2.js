const separa = () => {
  let caracter = document.getElementById('digiteCampo').value
  document.getElementById('digiteCampo').value = ''
  switch(caracter){
  case '0':
  case '1':
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
  document.getElementById('caractereNumero').value += ' ' + caracter
  break;
  default:
  document.getElementById('caractereLetra').value += ' ' + caracter
}}