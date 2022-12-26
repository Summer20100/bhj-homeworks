const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = document.querySelectorAll('.dropdown__item');


dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
}, false)


const preventDefault = function (event) {
    event.preventDefault();
} 

for (let el = 0; el < Array.from(dropdownItem).length; el++) {
    dropdownItem[el].addEventListener('click', (event) => {
        dropdownValue.textContent = dropdownItem[el].textContent;
        dropdownList.classList.remove('dropdown__list_active');
    preventDefault(event);
    }, false)
}