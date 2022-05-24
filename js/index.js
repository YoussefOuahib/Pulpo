$(document).ready(function(){
  $('.account-button').click(function() {
    $('.account-dropdown').slideToggle();
  });
  $("#sidebarCollapse").on('click', function(){
    console.log('helo');
    $("#sidebar").slideToggle();
    
  
    });
    $('.dropdown-submenu a').on("mouseover", function(e){
      
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
    
    $('.product-list ').slick({
      infinite: true,
      adaptiveHeight: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: true,
    
    });
 
    });
    
