
// sidebar nav init
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// text input init
$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

// carousel init
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});


// $(document).ready(function() {
//   $('input#name-register, input#email-register, input#password-register, input#plan-register, input#height-register, input#weight-register,').characterCounter();
// });






// prefill input text materialize css
// $(document).ready(function() {
//   M.updateTextFields();
// });