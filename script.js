
$(window).on("scroll", function() {
  $(".scroll-section").each(function() {
    if (isElementInViewport(this)) {
      $(this).addClass("visible");
      if ($(this).hasClass("scroll-1")) {
        var rect = this.getBoundingClientRect();
        if (rect.left <= 0) {
          $(this).addClass("scroll-left");
        }
      } else if ($(this).hasClass("scroll-2")) {
        var rect = this.getBoundingClientRect();
        if (rect.left <= 0) {
          $(this).addClass("scroll-right");
        }
      } else if ($(this).hasClass("scroll-3")) {
        var rect = this.getBoundingClientRect();
        if (rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
          $(this).addClass("scroll-right");
        }
      } else if ($(this).hasClass("scroll-4")) {
        var rect = this.getBoundingClientRect();
        if (rect.top <= 0) {
          $(this).addClass("scroll-down");
        }
      }
    }
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  // Utilisation de SweetAlert pour afficher la fenêtre contextuelle
  Swal.fire({
    title: 'Menu',
    html: '<ul><li><a href="#">Accueil</a></li><li><a href="https://shop.ledger.com/?r=97b532808e9b">Ledger</a></li><li><a href="https://accounts.binance.com/register?ref=506274097">Binance</a></li><li><a href="https://github.com/berru-g/">Contact</a></li></ul>',
    showCloseButton: true,
    showConfirmButton: false,
    customClass: {
      popup: 'custom-swal-popup',
      closeButton: 'custom-swal-close-button',
      content: 'custom-swal-content',
    }
  });
});

var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
