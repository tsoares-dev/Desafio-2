window.onload = function onloadEx2(){
	
	let ex4 = document.getElementById('ex4');
	ex4.innerHTML = "<label> Entre com um número: </label> </br>"
	+ "<input id='fatorial' type='text' placeholder='Digite aqui' >"
	+ "<input type='button' value='Calcular' onClick='fatorial()'>";
}

var app = { };
app.getComponente = function (nome){
if( !app[nome]) {
app[nome] = { $ctrl:{} };
}
return app[nome];
};

function fatorial(){
	let inicio = new Date().getTime();
	let fat = document.getElementById('fatorial');
	let number = Number(fat.value);
	let result=1;
	for(i = 1; i <= number; i++){
		result = result * i;
	}
	let fim = new Date().getTime();

	alert("O fatorial de: " + `${number}! = é: ${result} e durou ${fim - inicio} milisegundos`)
}