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
      welcome.classList.add('welcome_active');
      welcome.querySelector('span').innerHTML = 'user_id';
    }
  });
})