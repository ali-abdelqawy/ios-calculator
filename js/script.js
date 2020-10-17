let num1 = '0',
	num2 = '0',
	operation = '',
	operationClicked = false;

let screenOutput = $('#output')[0];

$('button').click(e => {
	const buttonValue = e.target.innerText;
	if (isNaN(parseFloat(buttonValue))) {
		handleOperation(buttonValue);
	} else {
		handleNumber(buttonValue);
	}
});

function handleNumber(number) {
	setScreenOutput(number);
	if (!operationClicked) {
		num1 = screenOutput.innerHTML;
	} else {
		num2 = screenOutput.innerHTML;
	}
}

function setScreenOutput(buttonValue) {
	if (screenOutput.innerHTML === '0') {
		screenOutput.innerHTML = buttonValue;
	} else {
		screenOutput.innerHTML += buttonValue;
	}
}

function handleOperation(buttonValue) {
	switch (buttonValue) {
		case 'C':
			clear();
			break;
		case '←':
			removeCharacter();
			break;
		case '+/-':
			toggleMinusSign();
			break;
		case '÷':
			divide();
			break;
		case 'x':
			multiply();
			break;
		case '-':
			subtract();
			break;
		case '+':
			sum();
			break;
		case '.':
			addDecimalPoint(buttonValue);
			break;
		case '=':
			calculateResult();
			break;
		default:
			break;
	}
	operationClicked = true;
}

function clear() {
	num1 = '0';
	num2 = '0';
	screenOutput.innerHTML = '0';
	return;
}

function removeCharacter() {
	if (screenOutput.innerHTML.length > 1) {
		screenOutput.innerHTML = screenOutput.innerHTML.slice(0, -1);
	} else {
		screenOutput.innerHTML = '0';
	}
	return;
}

function prepareCalculation() {
	num1 = screenOutput.innerHTML;
	screenOutput.innerHTML = 0;
}

function divide() {
	prepareCalculation();
	operation = '/';
	return;
}

function multiply() {
	prepareCalculation();
	operation = '*';
	return;
}

function subtract() {
	prepareCalculation();
	operation = '-';
	return;
}

function sum() {
	prepareCalculation();
	operation = '+';
	return;
}

function addDecimalPoint(buttonValue) {
	if (!screenOutput.innerHTML.includes('.')) {
		screenOutput.innerHTML += buttonValue;
	}
	console.log('addDecimalPoint', num1, num2);
	return;
}

function toggleMinusSign() {
	if (!screenOutput.innerHTML.includes('-')) {
		if (
			screenOutput.innerHTML.length > 0 ||
			screenOutput.innerHTML !== '0'
		) {
			screenOutput.innerHTML = '-' + screenOutput.innerHTML;
		} else {
			screenOutput.innerHTML = '-';
		}
	} else {
		screenOutput.innerHTML = screenOutput.innerHTML.substring(1);
	}

	if (num1 === '0') {
		num1 = screenOutput.innerHTML;
	} else {
		num2 = screenOutput.innerHTML;
	}
	return;
}

function calculateResult() {
	if (num1 !== '0' && num2 !== '0' && operation.length) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);

		switch (operation) {
			case '/':
				screenOutput.innerHTML = (num1 / num2).toFixed(2);
				break;
			case '*':
				screenOutput.innerHTML = num1 * num2;
				break;
			case '-':
				screenOutput.innerHTML = num1 - num2;
				break;
			case '+':
				screenOutput.innerHTML = num1 + num2;
				break;
			default:
				break;
		}
		num1 = screenOutput.innerHTML;
		num2 = 0;
		operation = '';
	}
	return;
}
