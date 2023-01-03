const fontActive = document.querySelectorAll('.font-size');
const elBookControlColor = document.querySelector('.book__control_color').querySelectorAll('.color');
const elBookControBackground = document.querySelector('.book__control_background').querySelectorAll('.color');

const book = document.querySelector('.book');


function delClassFontActive() {
  Array.from(fontActive).forEach(el => el.classList.remove('font-size_active'));
}
function delClassBookControlColor() {
  Array.from(elBookControlColor).forEach(el => el.classList.remove('color_active'));
}
function delClassBookControBackground() {
  Array.from(elBookControBackground).forEach(el => el.classList.remove('color_active'));
}


//Размер текста
for (let el in Array.from(fontActive)) {
  fontActive[el].onclick = function() {
    delClassFontActive();
    fontActive[el].classList.add('font-size_active');

    if (fontActive[el].classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
    } else if (fontActive[el].classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small');
      book.classList.remove('book_fs-big');
    }
    return false;
  }
}

//Цвет текста
for (let el in Array.from(elBookControlColor)) {
  elBookControlColor[el].onclick = function() {
    delClassBookControlColor();
    
    elBookControlColor[el].classList.add('color_active');

    if (elBookControlColor[el].classList.contains('text_color_black')) {
      book.classList.remove('book_color-gray');
      book.classList.remove('book_color-whitesmoke');
      book.classList.add('book_color-black');

    } else if (elBookControlColor[el].classList.contains('text_color_gray')) {
      book.classList.remove('book_color-whitesmoke');
      book.classList.remove('book_color-black');
      book.classList.add('book_color-gray');

    } else {
      book.classList.remove('book_color-black');
      book.classList.remove('book_color-gray');
      book.classList.add('book_color-whitesmoke');
    }
    return false;
  }
}

//Цвет фона
for (let el in Array.from(elBookControBackground)) {
  elBookControBackground[el].onclick = function() {
    delClassBookControBackground();
    
    elBookControBackground[el].classList.add('color_active');

    if (elBookControBackground[el].classList.contains('bg_color_black')) {
      book.classList.remove('book_bg-gray');
      book.classList.remove('book_bg-white');
      book.classList.add('book_bg-black');

    } else if (elBookControBackground[el].classList.contains('bg_color_gray')) {
      book.classList.remove('book_bg-white');
      book.classList.remove('book_bg-black');
      book.classList.add('book_bg-gray');

    } else {
      book.classList.remove('book_bg-black');
      book.classList.remove('book_bg-gray');
      book.classList.add('book_bg-white');
    }
    return false;
  }
}
