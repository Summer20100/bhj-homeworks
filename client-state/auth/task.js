const form = document.getElementById('signin__form');
const welcome = document.querySelector('#welcome');
document.querySelector('#signin').classList.add('signin_active');


form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const formSent = new FormData(form); 
  const request = new XMLHttpRequest();
  
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  request.send(formSent);
  request.addEventListener('readystatechange', function() {
    if (request.readyState === request.DONE && request.status === 200) {
      const data = JSON.parse(request.responseText);
      document.querySelector('#signin').classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      welcome.querySelector('span').innerHTML = data.user_id;
    } else {
      // popUpMsg();
      alert('Неверный логин/пароль');
    }
  });
})


// function popUpMsg() {
//   const popUpMsg = document.querySelector('body');
//   popUpMsg.insertAdjacentHTML("beforeEnd",
//     `<div class="modal_mask">
//        <div class="modal">
//             <div class="modal_msg">Неверный логин/пароль</div>
//             <button class="close_btn">Закрыть</button>
//         </div>
//     </div>`
//   );
//   const closeBtn = document.querySelector('.close_btn');
//   closeBtn.addEventListener('click', (ev) => {
//     ev.target.closest('div.modal_mask').remove();
//   });
// }