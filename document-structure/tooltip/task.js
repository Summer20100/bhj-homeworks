const links = document.querySelectorAll('.has-tooltip');

const clear = () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
}

links.forEach(element => element.addEventListener('mousemove', (ev) => {
  ev.preventDefault();
  clear();
  // const location = {left, bottom} = ev.target.getBoundingClientRect();
  let X = ev.pageX;
  let Y = ev.pageY;

  ev.target.insertAdjacentHTML("afterEnd", 
  `<div class="tooltip tooltip_active" style="position:absolute; top:${Y + 10}px; left:${X + 10}px">
        ${ev.target.title}
    </div>`);
  setTimeout(clear, 3000);
  }, false))