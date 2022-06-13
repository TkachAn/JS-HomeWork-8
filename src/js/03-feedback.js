import { throttle } from 'lodash';

const FORM = 0;
const LOCAL_KEY = "feedback-form-state";
const form = document.forms[FORM]; 


form.addEventListener('submit', onFormSub);
form.addEventListener('input', throttle(onData,500));

if(localStorage.getItem(LOCAL_KEY)){setText();}

//--*function*--//
function onFormSub(event){
	event.preventDefault();
	//--*--//
	locStor = localStorage.getItem(LOCAL_KEY);
	console.log('JSON',locStor);
 	console.log('OBJ',JSON.parse(locStor));
	localStorage.removeItem(LOCAL_KEY);
	form.reset();
};
//--*function*--//
function onData(){
	const mem = {};
	if(form.email.value){
			mem.email = form.email.value;
		}
	if(form.message.value){
			mem.message = form.message.value;
		}
	localStorage.setItem(LOCAL_KEY, JSON.stringify(mem));
};
//---*function*---//
function setText(){
	const localStor = JSON.parse(localStorage.getItem(LOCAL_KEY));
	form.email.value = localStor.email;
	form.message.value = localStor.message;
}
//--*function*--//
// function onText(event){
//	const mem = {};
// 	event.preventDefault();
// 	const formData = new FormData(event.currentTarget);
// 	formData.forEach((value, name)=>{
// 		mem[name] = value;
// 		localStorage.setItem(LOCAL_KEY, JSON.stringify(mem));
// })
// };
