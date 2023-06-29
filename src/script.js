/*import $ from "https://cdn.skypack.dev/jquery@3.6.4";*/
 function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
    }
/*
$(window).on("scroll", function() {
    $(".scroll-section").each(function() {
        if (isElementInViewport(this)) {
            $(this).addClass("visible");
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

*/
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


/*
setTimeout(function() {
  Swal.fire({
    title: 'Decouvrir nos offres',
    html: 'gratuitement',
    icon: 'success',
    confirmButtonText: 'Decouvrir',
    onBeforeOpen: () => {
      const confirmButton = Swal.getConfirmButton();
      confirmButton.addEventListener('click', () => {
        window.location.href = 'https://example.com'; // Remplacez cette URL par votre propre lien
      });
    }
  });
}, 10000);
*/
