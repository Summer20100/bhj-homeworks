const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
  for (let i = 0; i < reveal.length; i++) {    
    const {top, bottom} = reveal[i].getBoundingClientRect();
    console.log(i, {top, bottom});
    if (bottom < 0) {
      reveal[i].classList.remove('reveal_active');
    } else if (top > window.innerHeight) {
      reveal[i].classList.remove('reveal_active');
    } else {
      reveal[i].classList.add('reveal_active');
    }
  }
})