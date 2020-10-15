$(document).ready(function () {
	$('button').click(function () {
		const buttonValue = this.innerHTML;
		if (isNumber(buttonValue) && $('#output')[0].innerHTML === '0') {
			$('#output')[0].innerHTML = buttonValue;
		} else {
			$('#output')[0].innerHTML += buttonValue;
		}
	});
});

function isNumber(number) {
	return !isNaN(parseInt(number));
}
