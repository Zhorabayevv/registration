// let crms = ["в", "ва", "лора"] 
// var crm = document.querySelector('#crms');
// if(crms){
// if(crm){
// crms.forEach(c =>{
// 	crm.innerHTML += `<div class="crm">
// 	 ${c}
// 	 <img src="img/circle-arrow-right.svg" alt="go">
//  </div>`
// })
// }
// }


function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password_repeat(target){
	var input = document.getElementById('password-input-repeat');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

// function validateForm () {
	
// 	var name = document.getElementById('name');
// 	if(name){
// 	if( name.value.length < 3 || name.value.length > 30){
// 		name.classList.remove('correct');
// 		name.classList.add('error');
// 		var img = name.parentElement.querySelector('img');
// 		var span = name.parentElement.querySelector('span');
// 		if(img && span){
// 			name.parentElement.removeChild(img);
// 			name.parentElement.removeChild(span);
// 		}

// 		name.parentElement.innerHTML += `<img class="alert-circle" src="img/alert-circle.svg" alt="error"><span class="errorTip">Имя не должно быть меньше 3 и больше 30 символов</span>`;
	
// 	}
// }
// 	var password1 = document.getElementById('password-input');
// 	var password2 = document.getElementById('password-input-repeat');
// 	if(password1 && password2){
// 	if (password1.value !== password2.value) {
// 		password2.classList.remove('correct');
// 		password2.classList.add('error');
// 		var img = password2.parentElement.querySelector('img');
// 		var span = password2.parentElement.querySelector('span');
// 		if(img && span){
// 			password2.parentElement.removeChild(img);
// 			password2.parentElement.removeChild(span);
// 		}
// 		 password2.parentElement.querySelector('.password-control').style.display = 'none';
// 		 password2.parentElement.innerHTML += `<img class="alert-circle" src="img/alert-circle.svg" alt="error"><span class="errorTip">Пароли не совпадают</span>`;
// 		 return false; 
// 	}
// }

// 	var email = document.getElementById('email');
// 	if(email){
// 	var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
// 	if (!email_regexp.test(email.value)) {
// 		email.classList.remove('correct');
// 		email.classList.add('error');
// 		var img = email.parentElement.querySelector('img');
// 		var span = email.parentElement.querySelector('span');
// 		if(img && span){
// 			email.parentElement.removeChild(img);
// 			email.parentElement.removeChild(span);
// 		}
// 		email.parentElement.innerHTML += `<img class="alert-circle" src="img/alert-circle.svg" alt="error"><span class="errorTip">Неверный email. Попробуйте еще раз</span>`;
// 		 return false;
// 	}
// 	}
// 	console.log(default_select.textContent);

// 	var default_select = document.getElementById('default-select');
// 	if(default_select){
// 		console.log(default_select.textContent);
// 		if(default_select.value == "Страна"){
// 			default_select.classList.add('error');
// 		var span = default_select.parentElement.querySelector('span');
// 		if(img && span){
// 			default_select.parentElement.removeChild(span);
// 		}
// 		default_select.parentElement.innerHTML += `<span class="errorTip">Выберите страну</span>`;
// 		 return false;
// 		}
// 	}


// }



// custom select

let countries = ["Kazakhstan", "Austria", "Uzbekistan", "Russia", "South Korea"] 
var dcs = document.querySelector('#default-select');
if(dcs)
countries.forEach(c =>{
	 dcs.innerHTML += `<option value="${c}">${c}</option>`
})




const defaultSelectInput = document.querySelector('#default-select');

createCustomSelect(defaultSelectInput);
function foo() {


	const custom_select_style = document.querySelector('.custom-select-style');
		custom_select_style.textContent = defaultSelectInput.value
}

const custom_list = document.querySelector('.custom-list');
custom_list.addEventListener('click', e => {
	if(e.target.textContent != "Страна"){
		const hsdg = document.querySelector('.select-value');
		hsdg.style.color = "#142957";
		document.querySelector(`option[value='${e.target.textContent}']`).selected = true
		const select_value = document.querySelector('.select-value');
		select_value.textContent = defaultSelectInput.value;
	}
});
defaultSelectInput.onchange = function(){

	const custom_select_style = document.querySelector('.custom-select-style');
	custom_select_style.textContent = defaultSelectInput.value
};
defaultSelectInput.addEventListener('input', () => {
	const custom_select_style = document.querySelector('.custom-select-style');
	custom_select_style.textContent = defaultSelectInput.value
});


function createCustomSelect(defaultSelect) {

    const customSelect = document.createElement('div');
    const text = document.createElement('p');    
    
	 text.classList.add('select-value');
	 text.textContent = "Страна"

	 if(text.textContent === "Страна"){
		text.style.color="#757575"
	  }
    customSelect.appendChild(text);

    customSelect.classList.add('custom-select-style');

	 customSelect.addEventListener('click', ()=> {
		customSelect.classList.toggle('content-up');

  });


    defaultSelect.parentElement.insertBefore(customSelect, defaultSelect.parentElement[1]);
    const selectList = document.createElement('div');

    selectList.classList.add('custom-list');

    customSelect.appendChild(selectList);
    const elementsArray = Array.from(defaultSelect.children);
    elementsArray.forEach((el) => {
        
        const customElement = document.createElement('div');
        customElement.classList.add('custom-list-element');
                
        customElement.innerText = el.innerText;
        customElement.value = el.value;



	
        selectList.appendChild(customElement);
		  
    });

    customSelect.addEventListener('click', ()=> {
        selectList.classList.toggle('custom-list-visible');
    });
	 
}