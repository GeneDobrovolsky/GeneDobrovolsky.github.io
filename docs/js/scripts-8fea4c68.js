console.log("Yo");

function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

window.onload = function() {
  
  menuButton = document.getElementById("menu-button")
  menuLinks1 = document.getElementById("menu-links-1")
  menuLinks2 = document.getElementById("menu-links-2")
  menuDimming = document.getElementById("menu-dimming")
  headerContainer = document.getElementById("header")
  
  menuButton.onclick = function menuToggle() {
    
      if (!hasClass(menuButton, 'rotate-45deg')) addClass(menuButton, 'rotate-45deg'), removeClass(menuLinks1, 'd-none'), addClass(menuLinks1, 'd-flex'), removeClass(menuLinks2, 'd-none'), removeClass(menuDimming, 'd-none');
      else removeClass(menuButton, 'rotate-45deg'), addClass(menuLinks1, 'd-none'), removeClass(menuLinks1, 'd-flex'), addClass(menuLinks2, 'd-none'), addClass(menuDimming, 'd-none');
      
  }
  
  menuDimming.onclick = function menuToggle() {
    
      if (!hasClass(menuButton, 'rotate-45deg')) addClass(menuButton, 'rotate-45deg'), removeClass(menuLinks1, 'd-none'), addClass(menuLinks1, 'd-flex'), removeClass(menuLinks2, 'd-none'), removeClass(menuDimming, 'd-none');
      else removeClass(menuButton, 'rotate-45deg'), addClass(menuLinks1, 'd-none'), removeClass(menuLinks1, 'd-flex'), addClass(menuLinks2, 'd-none'), addClass(menuDimming, 'd-none');
      
  }
  
}