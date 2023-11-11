import "./styles.css";

const name = document.getElementById('name');
const message = document.getElementById('message');

const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};

name.addEventListener('input', () => {
  if (name.value === '') {
      message.style.color = 'red';
      message.textContent = '필수 입력 항목입니다!';
  } else {
      message.style.color = 'green';
      message.textContent = '멋진 이름이네요';
  }
});