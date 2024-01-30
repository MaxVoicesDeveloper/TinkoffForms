const buttonS = document.querySelector('.buttonselect');
const chatInput = document.getElementById('search');
var chatInputv = document.getElementById('search').value;
const scrollBlock = document.querySelector('.scroll-b');
const htmlFunc = document.querySelector('.content')
const textError = document.querySelector('#error')
const whyBord = document.querySelector('.whyb');

document.querySelector('.buttonselect').addEventListener('click', () => {
	if (!buttonS.classList.contains('active')) {
		buttonS.classList.add('active');
		scrollBlock.style.display = 'flex';
	}else{
		buttonS.classList.remove('active');
		scrollBlock.style.display = '';
	}
});

function menun1(){
	buttonS.classList.remove('active');
}
function menun(){
	buttonS.classList.add('active');
	scrollBlock.style.display = 'flex';
}
function prov(value) {
	console.log(value);
	if (value.length == 0) {
		chatInput.style.background = "#FCE3E3";
		chatInput.style.borderColor = "red";
		textError.style.display = "block";
	}
	else {
		chatInput.style.background = "#ECF1F7";
		textError.style.display = "";
	}

};

htmlFunc.addEventListener('click', () =>{
	if (!buttonS.classList.contains('active')) {
		buttonS.classList.remove('active');
		scrollBlock.style.display = '';
	}
});

function calendar(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
      D = new Date(year, month, Dlast),
      DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
      calendar = '<tr>',
      month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    if (DNfirst != 0) {
      for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
       for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
       if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
       } else {
         calendar += '<td>' + i;
       }
       if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
         calendar += '<tr>';
       }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td> ';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
        // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
    document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td> <td> <td> <td> <td> <td> <td> ';
    }
  }
  calendar("calendar", new Date().getFullYear(), new Date().getMonth());
        // переключатель минус месяц
  document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) - 1);
  }
        // переключатель плюс месяц
  document.querySelector('#calendar thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    calendar("calendar", document.querySelector('#calendar thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar thead td:nth-child(2)').dataset.month) + 1);
  }
