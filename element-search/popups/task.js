const btnClose = document.querySelectorAll('.modal__close');
const modalMain = document.querySelector('#modal_main');
modalMain.classList.add('modal_active');
const modalSuccess = document.querySelector('#modal_success');
const btnCloseMain = btnClose[0];
const btnDanger = btnClose[1];
const btnCloseSuccess = btnClose[2];

function removeActive() {
  modalSuccess.classList.remove('modal_active');
  modalMain.classList.remove('modal_active');
}

btnDanger.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active')
}

btnCloseSuccess.onclick = removeActive;
btnCloseMain.onclick = removeActive;
document.querySelector('.btn_success').onclick = removeActive;