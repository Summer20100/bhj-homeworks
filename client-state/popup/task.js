const btnClose = document.querySelector('.modal__close');
const cookClear = document.querySelector('#button');
document.querySelector('#subscribe-modal').classList.add('modal_active');

cookClear.onclick = function() {
  document.cookie = 'popup=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
  location.reload();
}

if (document.cookie) {
  document.querySelector('#subscribe-modal').classList.remove('modal_active');
} else {
  btnClose.onclick = function() {
    document.querySelector('#subscribe-modal').classList.remove('modal_active');
    document.cookie = 'popup=closed';
  }
}