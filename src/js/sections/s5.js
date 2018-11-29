import { showSectionNav, hideSectionNav } from "../navigation";
import { log } from "util";

const content    = document.querySelector(".s5-s0 .content");
const emailInput = document.querySelector(".s5-s0 form #email");
const joinBtn  = document.querySelector(".s5-s0 form .joinBtn");
const emailForm = document.querySelector(".s5-s0 form");
const overlay = document.querySelector(".s5-s0 .overlay");
const container = document.querySelector(".s5-s0 .container");
const header = document.querySelector("header");
const toTopBtn = document.querySelector(".to-top");

const init = () => {
  emailInput.addEventListener("keyup", () => checkEmailInput());
  joinBtn.addEventListener("click", () => submitForm());
};

const checkEmailInput = () => {
  console.log(validateEmail());
  if(validateEmail()){
    emailForm.classList.add('valid');
    joinBtn.classList.add('ready');
  }else{
    emailForm.classList.remove('valid');
    joinBtn.classList.remove('ready');
  }
}

const submitForm = () => {
  if(validateEmail()){
    joinBtn.classList.add('clicked');
    emailInput.setAttribute('readonly', '');

    setTimeout(() => {
      overlay.classList.remove('hidden');
      content.style.display = "none";
      container.style.backgroundColor = 'rgba(34, 34, 34, 0.804)';
      container.style.transition = ".3s";
      header.style.display = 'none';
      hideSectionNav();

      toTopBtn.addEventListener('click', () => {
        header.style.display = 'flex';
      });

    }, 900);
  }else{
    console.log('Enter a valid email address')
  }
}

const validateEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
    return true;
  }else{
    return false;
  }
}

const hideContent = () => {
  content.style.opacity = "0%";
}

export default init;
