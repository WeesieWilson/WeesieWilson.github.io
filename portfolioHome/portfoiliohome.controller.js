angular
.module('portfolioHome')
.controller('PortfolioCtrl', function ($rootScope,$scope) {
  $(document).ready(function(){


// SIDEBAR SLIDER

    var slide = $(".slide");
    $(slide).animate({marginLeft: "-1000px"});
    $(".button").on("click", function(){
  		if($(slide).css("marginLeft") === "-1000px"){
  			$(slide).animate({marginLeft: "400px"});
        $('.button').css('position', 'absolute').css('top','50%').css('left','960px');
  		}else if($(".slide").css("marginLeft") === "400px"){
  			$(slide).animate({marginLeft: "-1000px"});
        $('.button').css('position', 'absolute').css('top','50%').css('left','569px');

  		}
  	});



    // $('[href^="#"]').off().on('click', function (e) {
    //     if ($(this).attr('href') != '#') {
    //         e.preventDefault();
    //         $('body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    //     }
    // });


  });


  $('.about').hover(function(){ $(".about").parent(".sidebar-content").addClass("about-me")},
  function() {
      $(".about").parent(".sidebar-content").removeClass("about-me");
    }
  );
  $('.contact').hover(function(){ $(".contact").parent(".sidebar-content").addClass("contact-me")},
  function() {
      $(".contact").parent(".sidebar-content").removeClass("contact-me");
    }
  );
  $('.travel').hover(function(){ $(".travel").parent(".sidebar-content").addClass("travel-me")},
  function() {
      $(".travel").parent(".sidebar-content").removeClass("travel-me");
    }
  );





});
