const textarea = document.querySelector('#editor');
const btnClear = document.querySelector('#clear');

textarea.textContent = localStorage.name;

textarea.addEventListener('input', ev => {
  const text = ev.target.value;
  localStorage.setItem('name', text);
  console.log(text);
})

btnClear.onclick = function() {
  delete localStorage.name;
  textarea.textContent = '';
}