const mainMenuElms = document.querySelectorAll('.menu_main > li');

mainMenuElms.forEach(el => {
  el.addEventListener('click', function(event) { 
    let activeMenu = document.querySelector('.menu_active');
    let subMenuItem = this.querySelector('.menu_sub');
    if (!event.target.getAttribute('href')) {
      event.preventDefault();
    }                
    if (subMenuItem) { 
      subMenuItem.classList.toggle('menu_active');
      if (activeMenu) {
        activeMenu.classList.remove('menu_active');          
      }
      return false;
    }
  })
})