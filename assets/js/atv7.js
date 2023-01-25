const qualTriangulo = () => {
  let lado1 = document.getElementById('campo1').value
  let lado2 = document.getElementById('campo2').value
  let lado3 = document.getElementById('campo3').value

  let resultado = document.getElementById('resultado').innerHTML

  if(lado1 == lado2 && lado1 == lado3){                
      document.getElementById('resultado').innerHTML = "Este é um Triangulo Equilátero!"
  } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){               
      document.getElementById('resultado').innerHTML = "Este é um Triangulo Escaleno!"
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){                
      document.getElementById('resultado').innerHTML = "Este é um Triangulo Isósceles!"
  } else {                
      document.getElementById('resultado').innerHTML = "Numeros Invalidos!"
  }
}           