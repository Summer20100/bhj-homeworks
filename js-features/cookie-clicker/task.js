const cookie = document.querySelector('#cookie');
let count = 1;
let data = [];

cookie.addEventListener('click', () => {
  let start = new Date();
  let click = count++;
  
  data.push(start.getTime());
  document.querySelector('#clicker__counter').innerHTML = click;
  
  if (click % 2) {
    cookie.width = 300;
  } else {
    cookie.width = 200;
  }
  
  for (let i = data.length - 1; i > data.length - 2; i--) {
    let speedClick = +(Math.round((1 / (data[i] - data[i-1]) *1000) + "e+2") + "e-2");
    if (data.length === 1) {
      document.querySelector('#clicker__speed').innerHTML = 0;
    } else {
      document.querySelector('#clicker__speed').innerHTML = speedClick;
      data = data.slice(-2);
    }
  }
})