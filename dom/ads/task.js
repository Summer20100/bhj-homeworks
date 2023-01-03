const rotatorCase = document.querySelectorAll('.rotator__case');
let inc = 1;
let speed;

function delClass() {
  Array.from(rotatorCase).forEach(el => el.classList.remove('rotator__case_active'));
}

for (let el = 0; el < Array.from(rotatorCase).length; el++) {
  speed = rotatorCase[el].dataset.speed;
  setInterval( () => {
    delClass();
    inc ++;
    if (inc > Array.from(rotatorCase).length) {
      inc = 1;
    }
    for (let el in Array.from(rotatorCase)) {
      let rotator = rotatorCase[inc-1];
      rotator.classList.add('rotator__case_active');
      rotator.style.color = rotator.dataset.color;
    }
  }, speed)
}