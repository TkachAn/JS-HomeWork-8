import { throttle } from 'lodash';
const LOCAL_KEY = "feedback-form-state";
const fomrState = document.querySelector(".feedback-form");
const fomrInput = document.querySelector(".feedback-form input");
const fomrText = document.querySelector(".feedback-form textarea"); 
;
const mem = {};

fomrState.addEventListener('submit', onFormSub);
fomrState.addEventListener('input', onText);//throttle(onText,1000);
// fomrState.addEventListener('storage', setText);
setText();


function onFormSub(event){
	event.preventDefault();
	
	locStor = localStorage.getItem(LOCAL_KEY);
	console.log('do',locStor);
 	console.log('do',JSON.parse(locStor));
	localStorage.removeItem(LOCAL_KEY);
	fomrInput.value = '';
	fomrText.value = '';
	mem.email = '';
	mem.message = '';
};

function onText(event){
	event.preventDefault();
	 
	const formData = new FormData(event.currentTarget);
	formData.forEach((value, name)=>{
		mem[name] = value;
		//throttle((mem) => {
		localStorage.setItem(LOCAL_KEY, JSON.stringify(mem));
		//},1000);
		//console.log(mem);
})
};

function setText(event){
	const out = JSON.parse(localStorage.getItem(LOCAL_KEY));
	console.log('mem');
	fomrInput.value = out.email;
	fomrText.value = out.message;
}
