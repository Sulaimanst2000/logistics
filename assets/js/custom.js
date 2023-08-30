$('.logo-slide').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

$('.test').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    // arrows: false,
    prevArrow:'.prev',
    nextArrow:'.next',
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$( ".menuBar" ).click(function() {    

    // $('.un-list-ul').toggle("slide", { direction: "left" }, 1000);
  
    // if($(".menuBar").toggle){
  
    //   $(".menuBar").css('display' , 'none');
  
    //   $(".closeBar").css('display' , 'block');
  
    // //   $(".nav-head").css('background' , 'rgba(0, 0, 0, 0.79)');
  
    // //   $(".header").css('background' , 'rgba(0, 0, 0, 0.79)');
  
    // }
    // alert('hhhh')
    $('.header-navigation').css('visibility' , 'visible');
    if($(".menuBar").toggle){
     $('.menuBar').css('display' , 'none')
     $('.closeBar').css('display' , 'block')
    }
  });
  
   
  
  $( ".closeBar" ).click(function() {    
  
    $('.header-navigation').css('visibility' , 'hidden')
  
    if($(".closeBar").toggle){
  
      $(".closeBar").css('display' , 'none');
  
      $(".menuBar").css('display' , 'block');
  
      $(".nav-head").css('background' , 'transparent');
  
    }
  
  });

  // AOS Animation
AOS.init({
    offset: 0,
    duration: 1500,
    once: true,
});