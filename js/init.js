(function($){
  $(function(){
    $('#nav').load('nav.html');
    $('#footer').load('footer.html');
    $('.slider').slider({
            full_width: true
    });
    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space