var webcast = document.getElementById('webcast');
var webcastDrop = document.getElementById('webcastdrop');
var infoCenter = document.getElementById('infocenter');
var infoCenterDrop = document.getElementById('infocenterdrop');
// window.console.log(infoCenter);

// webcast dropdown
webcast.addEventListener('mouseover', function() {
  webcastDrop.classList.add('open');
});
webcastDrop.addEventListener('mouseover', function() {
  webcastDrop.classList.add('open');
});
webcast.addEventListener('mouseleave', function() {
  webcastDrop.classList.remove('open');
});
webcastDrop.addEventListener('mouseleave', function() {
  webcastDrop.classList.remove('open');
});

//info center dropdown
infocenter.addEventListener('mouseover', function() {
  infoCenterDrop.classList.add('open');
});
infoCenterDrop.addEventListener('mouseover', function() {
  infoCenterDrop.classList.add('open');
});
infocenter.addEventListener('mouseleave', function() {
  infoCenterDrop.classList.remove('open');
});
infoCenterDrop.addEventListener('mouseleave', function() {
  infoCenterDrop.classList.remove('open');
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 900);
      return false;
    }
  }
});
