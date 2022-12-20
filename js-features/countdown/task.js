setInterval(() => {
    let sec = document.querySelector('#timer');
    sec.innerHTML -= 1;
    if (sec.innerHTML <= 0) {
      sec.innerHTML = '0' + 0;
      alert('Вы победили в конкурсе!');
      window.location.assign('./Новый текстовый документ.rrr');
      document.querySelector('#doc').click();
    } else if (sec.innerHTML <= 9) {
      sec.innerHTML = '0' + sec.innerHTML;
    } 
  }, 1000)