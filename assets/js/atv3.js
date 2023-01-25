window.onload = function onloadEx1(){
	var ex3 = document.getElementById('ex3');
	ex3.innerHTML = "<label>Entre com: Valor Mínimo =1 | Valor Máximo =50</label> </br>"
	+ "<input id='numeroMinimo' type='text' placeholder='Valor minimo' onKeyPress='return SomenteNumero(event)'>"
	+ "<input id='numeroMaximo' type='text' placeholder='Valor maximo' onKeyPress='return SomenteNumero(event)'>"
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
	let numeroMinimo = document.getElementById('numeroMinimo');
	let numeroMaximo = document.getElementById('numeroMaximo');
	if(Number(numeroMinimo.value) < Number(numeroMaximo.value)){

		let numAlvo = 0;
		for(var count = numeroMinimo.value; count < Number(numeroMaximo.value); count ++){
			if ((count % 2 == 0)&&(count % 3 == 0)){
				numAlvo++;	
			}
		}
		alert("Existem: "+numAlvo + " número(s) que são múltiplos de 2 e 3 entre o valor mínimo e o valor máximo" );	
	}else{
		alert("O numero minimo é maior que o maximo, corrija!");
	}
}