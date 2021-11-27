//Эта функция запускает таймер
function start() {
	window.timerId = window.setInterval(timer, 1000);
	let elem = document.getElementById('start')
	elem.setAttribute("disabled", "true")
	elem.style.backgroundColor = 'grey';
}
//Эта функция останавливает таймер
function stop() {
	window.clearInterval(window.timerId);
	let elem = document.getElementById('start')
	elem.setAttribute("disabled", "false")
	elem.style.backgroundColor = 'black';
}

//Эта функция меняет value для инпута
function timer() {
	var elem = document.getElementById('timer');
	elem.innerHTML = parseInt(elem.innerHTML)+1;
}