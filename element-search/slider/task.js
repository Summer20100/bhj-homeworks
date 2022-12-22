const slides = document.querySelectorAll('.slider__item');
const comments = document.querySelectorAll('.slider__comment');
const dots = document.querySelectorAll('.slider__dot');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');

let currentSlide = 3;

let count = currentSlide - 1;


function removeClass(index) {
  slides[index].classList.remove('slider__item_active');
  comments[index].classList.remove('slider__comment_active');
  dots[index].classList.remove('slider__dot_active');
}

function addClass(index) {
  slides[index].classList.add('slider__item_active');
  comments[index].classList.add('slider__comment_active');
  dots[index].classList.add('slider__dot_active');
}

addClass(count);

arrowNext.onclick = () => {
  removeClass(count);
  if (count >= slides.length - 1) count = -1;
  count++;
  addClass(count);
}

arrowPrev.onclick = () => {
  removeClass(count);
  if (count === 0) count = slides.length;
  count--;
  addClass(count);
}

dots.forEach((item, index) => {
  console.log(item, index);
  item.onclick = () => {
    removeClass(count);
    count = index;
    addClass(count);
  }
})