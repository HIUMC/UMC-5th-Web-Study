let InputUsername = document.querySelector('#username');
let SuccessMessage = document.querySelector('.success-name'); 
let FailureMessage = document.querySelector('.failure-name'); 

let InputNickname = document.querySelector('#nickname');
let SuccessNicknameMessage = document.querySelector('.success-nickname');
let FailureNicknameMessage = document.querySelector('.failure-nickname');

let Inputemail = document.querySelector('#email');
let SuccessEmailMessage = document.querySelector('.success-email');
let FailureEmailMessage = document.querySelector('.failure-email');

let InputPassword = document.querySelector('#password'); 
let InputPasswordRetype = document.querySelector('#password-check'); 

let FailurePWMessage = document.querySelector('.failure-pw'); 
let SuccessPWMessage = document.querySelector('.success-pw');

let FailurePwCheckMessage = document.querySelector('.failure-pwCheck'); 
let SuccessPwCheckMessage = document.querySelector('.success-pwCheck');




function idInput(value) {
    return value!=""
  }
function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/.test(str);
  } 
function isMatch (password1, password2) {
    return password1 === password2;
  }
function nicknameLength(value) {
    return value.length >= 2 && value.length <= 5;
}
function correctEmail(str) {
    return /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(str);
}



InputUsername.onkeyup = function () {
    
    if (InputUsername.value.length !== 0) {
        SuccessMessage.classList.remove('hide'); 
        FailureMessage.classList.add('hide'); 
    }
    else {
        SuccessMessage.classList.add('hide');
      FailureMessage.classList.remove('hide');
    }
};

InputNickname.onkeyup = function () {
  
    if (nicknameLength(InputNickname.value)) {
        SuccessNicknameMessage.classList.remove('hide'); 
        FailureNicknameMessage.classList.add('hide'); 
    }
    else {
      SuccessNicknameMessage.classList.add('hide');
      FailureNicknameMessage.classList.remove('hide');
    }
};
InputPassword.onkeyup = function () {

    if (InputPassword.value.length !== 0) {
        FailurePWMessage.classList.remove('hide');
        SuccessPWMessage.classList.add('hide');
        if(strongPassword(InputPassword.value)) {
            SuccessPWMessage.classList.remove('hide');
            FailurePWMessage.classList.add('hide'); 
        }
    }
   else {
        FailurePWMessage.classList.remove('hide');
        SuccessPWMessage.classList.add('hide');
       
      }
    };   

InputPasswordRetype.onkeyup = function () {

    if (InputPasswordRetype.value.length !== 0) {
      if(isMatch(InputPassword.value, InputPasswordRetype.value)) {
        FailurePwCheckMessage.classList.add('hide');
        SuccessPwCheckMessage.classList.remove('hide');
      }
      else {
        FailurePwCheckMessage.classList.remove('hide');
        SuccessPwCheckMessage.classList.add('hide');
    }
    }
};

Inputemail.onkeyup = function () {
    if (correctEmail(Inputemail.value)) {
        SuccessEmailMessage.classList.remove('hide');
        FailureEmailMessage.classList.add('hide');
    } else {
        SuccessEmailMessage.classList.add('hide');
        FailureEmailMessage.classList.remove('hide');
    }
};


function openModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
}

const joinButton = document.querySelector(".joinButton");
joinButton.addEventListener("click", openModal);

const closeButton = document.querySelector(".closebutton");
closeButton.addEventListener("click", closeModal);
