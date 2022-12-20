const hole = document.querySelectorAll('.hole');

function clear() {
  document.querySelector('#dead').innerHTML = 0;
  document.querySelector('#lost').innerHTML = 0;
}

Array.from(hole).forEach(el => {
  el.addEventListener('click', () => {
    if (el.classList.contains('hole_has-mole')) {
      let countDead = document.querySelector('#dead').innerHTML++;
      countDead += 1;
      if (countDead == 10) {
        alert('Сегодня ты выиграл');
        clear()
      }
    } else {
      let countLost = document.querySelector('#lost').innerHTML++;
      countLost += 1;
      if (countLost == 5) {
        alert('Сегодня ты проиграл')
        clear()
      };
    }
  }, false)
})

