const tabContent = document.querySelectorAll('.tab__content');
const arrTab = Array.from(document.querySelectorAll('.tab'));

function clear() {
  for (let el = 0; el < arrTab.length; el++) {
    arrTab[el].classList.remove('tab_active');
    tabContent[el].classList.remove('tab__content_active');
  }
}

for (let i = 0; i < arrTab.length; i++) {
  arrTab[i].onclick = function() {
    clear();
    let indexTab = arrTab.indexOf(arrTab[i]);
    for (let el = 0; el < arrTab.length; el++) {
      if (indexTab === el) {
        arrTab[indexTab].classList.add('tab_active');
        tabContent[indexTab].classList.add('tab__content_active');
      }
    }
  }
}