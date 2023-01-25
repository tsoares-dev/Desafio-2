window.onload = function onloadEx1(){
	let ex1 = document.getElementById('ex1');
	ex1.innerHTML = "<label>Valor minimo = 1 | valor maximo = 50</label> </br>"
	+ "<input id='minimo' type='text' placeholder='Valor minimo' onKeyPress='return SomenteNumero(event)'>"
	+ "<input id='maximo' type='text' placeholder='Valor maximo' onKeyPress='return SomenteNumero(event)'>"
	+ "<input type='button' value='Calcular' onClick='exibirNumeros()'>";
}

const SomenteNumero = (e) => {
	var tecla=(window.event)?event.keyCode:e.which;   
	if((tecla>47 && tecla<58)) return true;
	else{
		if (tecla==8 || tecla==0) return true;
		else  return false;
	}
}

const exibirNumeros = () => {
	let minimo = document.getElementById('minimo');
	let maximo = document.getElementById('maximo');
	if(Number(minimo.value) < Number(maximo.value)){

		let numAlvo = 0;
		for(var count = minimo.value; count < Number(maximo.value); count ++){
			if ((count % 2 == 0)&&(count % 3 == 0)){
				numAlvo++;	
			}
		}
		alert("Os números que atendem a regra é: "+numAlvo);	
	}else{
		alert("O numero minimo é maior que o maximo, corrija!");
	}
}