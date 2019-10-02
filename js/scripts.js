
$(document).ready(function(){
  // your code goes here

  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
       scrollTop: $(href).offset().top
    }, 500, function () {
       window.location.hash = href;
   	});
    return false;
   });
  // Stellar
  $.stellar();
  //torus
      //$("#links a").tosrus();
      $("#links a").each(
        function()
        {
          $(this).tosrus({
            buttons : false
          });
        }
      );
      //$("#liinks a").tosrus();
      $("#liinks a").each(
        function()
        {
          $(this).tosrus({
            buttons : false
          });
        }
      );
});

