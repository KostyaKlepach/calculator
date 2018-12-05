function plus() {
	let num1, num2, sum;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	if (isNaN(num1)){
		alert('Enter pls number!')
	}

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	if (isNaN(num2)){
		alert('Enter pls number!')
	}

	sum = num1 + num2;

	document.getElementById('result').innerHTML = sum;
}

function mynus() {
	let num1, num2, sum;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	if (isNaN(num1)){
		alert('Enter pls number!')
	}

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	if (isNaN(num2)){
		alert('Enter pls number!')
	}

	sum = num1 - num2;

	document.getElementById('result').innerHTML = sum;
}

function degree() {
	let num1, num2, sum;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	if (isNaN(num1)){
		alert('Enter pls number!')
	}

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	if (isNaN(num2)){
		alert('Enter pls number!')
	}

	sum = num1 / num2;

	document.getElementById('result').innerHTML = sum;
}

function multiplication() {
	let num1, num2, sum;

	num1 = document.getElementById('num1').value;
	num1 = parseInt(num1);
	if (isNaN(num1)){
		alert('Enter pls number!')
	}

	num2 = document.getElementById('num2').value;
	num2 = parseInt(num2);
	if (isNaN(num2)){
		alert('Enter pls number!')
	}

	sum = num1 * num2;

	document.getElementById('result').innerHTML = sum;
}

