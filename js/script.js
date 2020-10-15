let num1 = 0,
	num2 = 0,
	operation = '';

const outputDivId = '#output';

$(document).ready(function () {
	$('button').click(function () {
		const buttonValue = this.innerHTML;

		if (isNumber(buttonValue)) {
			handleNumericButtons(buttonValue);
		} else {
			switch (buttonValue) {
				case 'C':
					clear();
					break;
				case '←':
					removeCharacter();
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
				case '=':
					calculateResult();
					break;
				default:
					break;
			}
		}
	});
});

function isNumber(number) {
	return !isNaN(parseInt(number));
}

function handleNumericButtons(buttonValue) {
	setScreenOutput(buttonValue);
	if (num1 === 0) {
		num1 = parseInt($(outputDivId)[0].innerHTML);
	} else {
		num2 = parseInt($(outputDivId)[0].innerHTML);
	}
}

function setScreenOutput(buttonValue) {
	if ($(outputDivId)[0].innerHTML === '0') {
		$(outputDivId)[0].innerHTML = buttonValue;
	} else {
		$(outputDivId)[0].innerHTML += buttonValue;
	}
}

function clear() {
	(num1 = 0), (num2 = 0);
	$(outputDivId)[0].innerHTML = '0';
	return;
}

function removeCharacter() {
	if ($(outputDivId)[0].innerHTML.length > 1) {
		$(outputDivId)[0].innerHTML = $(outputDivId)[0].innerHTML.slice(0, -1);
	} else {
		$(outputDivId)[0].innerHTML = '0';
	}
	return;
}

function prepareCalculation() {
	num1 = parseInt($(outputDivId)[0].innerHTML);
	$(outputDivId)[0].innerHTML = 0;
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

function calculateResult() {
	if (num1 !== 0 && num2 !== 0 && operation.length) {
		switch (operation) {
			case '/':
				$(outputDivId)[0].innerHTML = (num1 / num2).toFixed(2);
				break;
			case '*':
				$(outputDivId)[0].innerHTML = num1 * num2;
				break;
			case '-':
				$(outputDivId)[0].innerHTML = num1 - num2;
				break;
			case '+':
				$(outputDivId)[0].innerHTML = num1 + num2;
				break;
			default:
				break;
		}
		num1 = $(outputDivId)[0].innerHTML;
		num2 = 0;
	}
	return;
}
