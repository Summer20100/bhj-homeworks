const form = document.querySelector( '#form' );
const uploadFile = document.querySelector( '#file' );
const btnInput = document.querySelectorAll('span')[0]
const nameOfFile = document.querySelectorAll('span')[1];
const progressBar = document.getElementById( 'progress' );

btnInput.onclick = function() {
  progressBar.value = 0;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const file = uploadFile.files[0];
  const formSent = new FormData();
  const xhr = new XMLHttpRequest();
  
  if (uploadFile.files.length > 0) {

    formSent.append('form', file);
    
    xhr.upload.addEventListener('progress', progressHandler, false);
    xhr.addEventListener('load', loadHandler, false);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formSent);
  } else {
    alert('Сначала выберите файл')
  }
  return false
});


function progressHandler(event) {
  const percentLoaded = Math.round((event.loaded / event.total) * 100);
  progressBar.value = percentLoaded;
}

function loadHandler() {
  progressBar.value = 0;
}