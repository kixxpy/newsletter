const form = document.querySelector('form');
const cardOne = document.querySelector('.card1');
const cardTwo = document.querySelector('.card2');
const thanksBtn = document.querySelector('.thanks-btn');
const input = document.getElementById('input');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');


form.addEventListener('submit', (e) => {
	e.preventDefault();
	email.innerText = input.value;
	cardOne.classList.add("hide");
	cardTwo.classList.remove("hide");
	
})

thanksBtn.addEventListener('click', ()=> {
	window.location.reload();
})