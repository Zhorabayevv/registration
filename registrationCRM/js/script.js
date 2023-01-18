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

function show_hide_password(target) {
  var input = document.getElementById("password-input");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}
function show_hide_password_repeat(target) {
  var input = document.getElementById("password-input-repeat");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

//let btn = document.querySelector('.button');
//btn.setAttribute('disabled', true);
function policy() {
  var checkbox = document.getElementById("check").checked;

  if (!checkbox) {
    btn.setAttribute("disabled", true);
  } else {
    btn.removeAttribute("disabled");
  }
}

function validateForm() {
  var name = document.getElementById("name");
  if (name) {
    if (name.value.length < 3 || name.value.length > 30) {
      name.classList.remove("correct");
      name.classList.add("error");
      var img = name.parentElement.querySelector("img");
      var span = name.parentElement.querySelector("span");
      if (img && span) {
        name.parentElement.removeChild(img);
        name.parentElement.removeChild(span);
      }

      name.parentElement.innerHTML += `<img class="alert-circle" style="bottom: 36px;" src="img/alert-circle.svg" alt="error"><span class="errorTip">Имя не должно быть меньше 3 и больше 30 символов</span>`;
    } else {
      name.classList.remove("error");
      name.classList.add("correctInput");
      var img = name.parentElement.querySelector("img");
      var span = name.parentElement.querySelector("span");
      if (img && span) {
        name.parentElement.removeChild(img);
        name.parentElement.removeChild(span);
      }
    }
  }
  var password1 = document.getElementById("password-input");
  var password2 = document.getElementById("password-input-repeat");
  if (password1 && password2) {
    if (password1.value !== password2.value) {
      password2.classList.remove("correct");
      password2.classList.add("error");
      var img = password2.parentElement.querySelector("img");
      var span = password2.parentElement.querySelector("span");
      if (img && span) {
        password2.parentElement.removeChild(img);
        password2.parentElement.removeChild(span);
      }
      password2.parentElement.querySelector(".password-control").style.display =
        "none";
      password2.parentElement.innerHTML += `<span class="errorTip">Пароли не совпадают</span>`;
      return false;
    } else {
      password2.classList.remove("error");
      password2.classList.add("correct");
      var img = password2.parentElement.querySelector("img");
      var span = password2.parentElement.querySelector("span");
      if (img && span) {
        password2.parentElement.removeChild(img);
        password2.parentElement.removeChild(span);
      }
    }
  }

  var email = document.getElementById("email");
  if (email) {
    var email_regexp =
      /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email.value)) {
      email.classList.remove("correct");
      email.classList.add("error");
      var img = email.parentElement.querySelector("img");
      var span = email.parentElement.querySelector("span");
      if (img && span) {
        email.parentElement.removeChild(img);
        email.parentElement.removeChild(span);
      }
      email.parentElement.innerHTML += `<img class="alert-circle" src="img/alert-circle.svg" alt="error"><span class="errorTip">Неверный email. Попробуйте еще раз</span>`;
      //emailValue = email.value;
      document.getElementById("email").value = email.value;

      console.log(document.getElementsByName("email").value);
      //document.getElementsByName('email').value = emailValue;
      //console.log(emailValue)
      return false;
    }
  }


  var default_select = document.getElementById("default-select");
  if (default_select) {
    if (default_select.value == "Страна") {
      default_select.classList.add("error");
      var span = default_select.parentElement.querySelector("span");
      if (img && span) {
        default_select.parentElement.removeChild(span);
      }
      default_select.parentElement.innerHTML += `<span class="errorTip">Выберите страну</span>`;
      return false;
    }
  }

  // console.log(email.value = emailValue);
}

// custom select

// var tnum = "ru";

var tnum = localStorage.getItem('tnum') || 'ru';
$("span#selectedLang").text(tnum);
$(document).ready(function () {
  $(document).click(function (e) {
    $(".translate_wrapper, .more_lang").removeClass("active");
    // console.log('ddd')
  });

  $(".translate_wrapper .current_lang").click(function (e) {
    e.stopPropagation();
    console.log('ddd')
    $(this).parent().toggleClass("active");

    setTimeout(function () {
      $(".more_lang").toggleClass("active");
      console.log('dddddd')
    }, 5);
  });

  /*TRANSLATE*/
  translate(tnum);

  $(".more_lang .lang").click(function () {
    console.log($(this).attr("data-value"));
    $(this).addClass("selected").siblings().removeClass("selected");
    $(".more_lang").removeClass("active");

    var lang = $(this).attr("data-value");
    var tnum = lang;
    // if(!localStorage.getItem('tnum')) {
      localStorage.setItem('tnum',lang);
    // }
    translate(tnum);

    $(".current_lang .lang-txt").text(lang);
  });
});

function translate(lang) {
  $("h1#reg").text(trans[0][lang]);
  $("title#reg").text(trans[0][lang]);
  $("input#name").attr("placeholder", trans[1][lang]);
  $("input#password-input").attr("placeholder", trans[2][lang]);
  $("input#password-input-repeat").attr("placeholder", trans[3][lang]);
  $("span#accept").text(trans[25][lang]);
  $("a#policy").text(trans[26][lang]);
  $("span#and").text(trans[27][lang]);
  $("a#contract").text(trans[28][lang]);
  $("span#errorMess").text(trans[29][lang]);
  $("input#companyName").attr("placeholder", trans[30][lang]);
  $("input#surname").attr("placeholder", trans[31][lang]);
  $("button#submit_button_log").text(trans[8][lang]);
  $("button#submit_button").text(trans[4][lang]);
  $("h1#recovery_pass").text(trans[11][lang]);
  $("span#newPass").text(trans[32][lang]);
  $("button#submit_button_rec").text(trans[33][lang]);
  $("title#pass_reset").text(trans[11][lang]);
  $("span#sent_your_mail").text(trans[19][lang]);
  $("span#reset_pass").text(trans[20][lang]);
  $("title#select_crm").text(trans[17][lang]);
  $("h1#select_crm").text(trans[17][lang]);
  $("title#activation").text(trans[34][lang]);
  $("h1#went_wrong").text(trans[23][lang]);
  $("h1#not_went_wrong").text(trans[13][lang]);
  $("span#success_text").text(trans[24][lang]);
  $("span#welcome").text(trans[12][lang]);
  $("title#login").text(trans[35][lang]);
  $("h1#h_login").text(trans[8][lang]);
  $("span#no_acc").text(trans[5][lang]);
  $("a#signUp").text(trans[4][lang]);
  $("label#remember").text(trans[36][lang]);
  $("a#forget").text(trans[37][lang]);
  $("h1#password_reset").text(trans[21][lang]);
  $("span#sign_new_again").text(trans[22][lang]);
  $("title#reset_password").text(trans[38][lang]);
  $("span#enter_your_email").text(trans[9][lang]);
  $("button#submit_button_send").text(trans[39][lang]);
}

var trans = [
  {
    en: "Registration",
    ru: "Регистрация",
    uz: "Рўйхатдан ўтиш",
  },
  {
    en: "First Name",
    ru: "Имя",
    uz: "Исм",
  },
  {
    en: "Password",
    ru: "Пароль",
    uz: "Парол",
  },
  {
    en: "Confirm password",
    ru: "Подтвердить пароль",
    uz: "Паролни тасдиқланг",
  },
  {
    en: "Register",
    ru: "5 Зарегистрироваться",
    uz: "Рўйхатдан ўтиш",
  },
  {
    en: "No account yet",
    ru: "Еще нет аккаунта",
    uz: "Ҳали ҳисоб иўқ",
  },
  {
    en: "Name must not be less than 3 characters",
    ru: "7 Имя не должно быть меньше 3 символов",
    uz: "Исм 3та белгидан кам бўлмаслиги керак",
  },
  {
    en: "Invalid email. Try again",
    ru: "Неверный email. Попробуйте еще раз",
    uz: "Яроқсиз email. Яна бир бор уриниб кўринг",
  },
  {
    en: "Login",
    ru: "9 Вход",
    uz: "Кириш",
  },
  {
    en: "Enter your email and we will send you a link to",
    ru: "Введите вашу почту и мы отправим вам ссылку для",
    uz: "Электрон почтангизни киритинг ва биз сизга тиклаш ",
  },
  {
    en: "Recovery",
    ru: "восстановления",
    uz: "ҳаволасини юборамиз",
  },
  {
    en: "Password recovery",
    ru: "12 Восстановление пароля",
    uz: "Паролни тиклаш",
  },
  {
    en: "Welcome to UZCRM",
    ru: "Добро пожаловать в UZCRM",
    uz: "UZCRM-га хуш келибсиз",
  },
  {
    en: "Registration completed successfully!",
    ru: "Регистрация прошла успешно!",
    uz: "Рўйхатдан ўтиш муваффақиятли якунланди",
  },
  {
    en: "Email confirmation",
    ru: "15 Подтверждение электронной почты",
    uz: "Электрон почтангизга тасдиқловчи хат юборилди. ",
  },
  {
    en: "A confirmation email has been sent to your email.",
    ru: "16 На вашу почту отправлено письмо с подтверждением. ",
    uz: "Рўйхатдан ўтишни якунлаш учун ҳаволага ўтинг",
  },
  {
    en: "Follow the link to complete registration",
    ru: "17 Перейдите по ссылке для завершения регистрации",
    uz: "Имя",
  },
  {
    en: "Select CRM",
    ru: "18 Выберите CRM",
    uz: "CRM-ни танланг",
  },
  {
    en: "Passwords do not match",
    ru: "19 Пароли не совпадают",
    uz: "Пароллар мос келмаяпти",
  },
  {
    en: "A letter has been sent to your mail.",
    ru: "20 На вашу почту отправлено письмо.",
    uz: "Сизнинг почтангизга хат юборилди",
  },
  {
    en: "Follow the link to reset your password",
    ru: "Перейдите по ссылке для сброса пароля",
    uz: "Паролни тиклаш учун ҳаволага ўтинг",
  },
  {
    en: "Password reset successful",
    ru: "22 Сброс пароля выполнен успешно",
    uz: "Паролни тиклаш муваффақиятли",
  },
  {
    en: "Sign in with new credentials again",
    ru: "Войдите с новыми учетными данными заново",
    uz: "Янги ҳисоб маълумотлари билан қайта киринг",
  },
  {
    en: "Something went wrong",
    ru: "24 Что-то пошло не так",
    uz: "Нимадир нотўғри бажарилди",
  },
  {
    en: "Please try again",
    ru: "Пожалуйста, повторите еще раз",
    uz: "Илтимос, яна такрорланг",
  },
  {
    en: "I have read and accept",
    ru: "Я прочитал(-а) и принимаю",
    uz: "Мен ўқиди ( -а ) ва қабул қилаяпман",
  },
  {
    en: "privacy policy",
    ru: "27 политику конфиденциальности",
    uz: "махфийлик сиёсати",
  },
  {
    en: "and",
    ru: "и",
    uz: "ва",
  },
  {
    en: "contract offer",
    ru: "договор оферты",
    uz: "шартнома таклифи",
  },
  {
    en: "I have read and accept",
    ru: "30 Пользователь с таким e-mail уже существует",
    uz: "Фойдаланувчи шундай e-mail энди мавжуд",
  },
  {
    en: "I have read and accept",
    ru: "Название компании",
    uz: "Номи компаниясининг",
  },
  {
    en: "Second name",
    ru: "Фамилия",
    uz: "Исм-шариф",
  },
  {
    en: "Enter a new password",
    ru: "Введите новый пароль",
    uz: "Киритинг янги шартлашилган махфий сўз",
  },
  {
    en: "Recover",
    ru: "34 Восстановить",
    uz: "Тикламоқ",
  },
  {
    en: "Activation",
    ru: "Активация",
    uz: "Тезлаштирув",
  },
  {
    en: "Login",
    ru: "Логин",
    uz: "Логин",
  },
  {
    en: "Remember me",
    ru: "Запомнить меня",
    uz: "Ёдда сақламоқ мени",
  },
  {
    en: "Forgot password?",
    ru: "38 Забыли пароль?",
    uz: "Паролни унутдингизми?",
  },
  {
    en: "Password Reset",
    ru: "Сброс пароля",
    uz: "Паролни тиклаш",
  },
  {
    en: "Send",
    ru: "Отправить",
    uz: "Юбориш",
  },
  {
    en: "",
    ru: "",
    uz: "",
  },
  {
    en: "",
    ru: "",
    uz: "",
  },
  {
    en: "",
    ru: "",
    uz: "",
  },
  {
    en: "",
    ru: "",
    uz: "",
  }
];
