function sumarMatrices() {
	// Obtener los valores de las matrices A y B
	var a00 = parseInt(document.getElementById("a00").value);
	var a01 = parseInt(document.getElementById("a01").value);
	var a02 = parseInt(document.getElementById("a02").value);
	var a10 = parseInt(document.getElementById("a10").value);
	var a11 = parseInt(document.getElementById("a11").value);
	var a12 = parseInt(document.getElementById("a12").value);
	var a20 = parseInt(document.getElementById("a20").value);
	var a21 = parseInt(document.getElementById("a21").value);
	var a22 = parseInt(document.getElementById("a22").value);

	var b00 = parseInt(document.getElementById("b00").value);
	var b01 = parseInt(document.getElementById("b01").value);
	var b02 = parseInt(document.getElementById("b02").value);
	var b10 = parseInt(document.getElementById("b10").value);
	var b11 = parseInt(document.getElementById("b11").value);
	var b12 = parseInt(document.getElementById("b12").value);
	var b20 = parseInt(document.getElementById("b20").value);
	var b21 = parseInt(document.getElementById("b21").value);
	var b22 = parseInt(document.getElementById("b22").value);

	// Calcular la matriz resultado C
	var c00 = a00 + b00;
	var c01 = a01 + b01;
	var c02 = a02 + b02;
	var c10 = a10 + b10;
	var c11 = a11 + b11;
	var c12 = a12 + b12;
	var c20 = a20 + b20;
	var c21 = a21 + b21;
	var c22 = a22 + b22;

	// Mostrar la matriz resultado C en el HTML
	document.getElementById("c00").value = c00;
	document.getElementById("c01").value = c01;
	document.getElementById("c02").value = c02;
	document.getElementById("c10").value = c10;
	document.getElementById("c11").value = c11;
	document.getElementById("c12").value = c12;
	document.getElementById("c20").value = c20;
	document.getElementById("c21").value = c21;
	document.getElementById("c22").value = c22;
}
