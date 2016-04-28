angular
.module('portfolioHome')
.controller('PortfolioCtrl', function ($rootScope,$scope,$location, $anchorScroll) {


//   $scope.scrollTo = function(id) {
//    $location.hash(id);
//    $anchorScroll();
// };


// SIDEBAR SLIDER

    var slide = $(".sliding");
    $(slide).animate({marginLeft: "-414px"});
    $(".button").on("click", function(){
  		if($(slide).css("marginLeft") === "-414px"){
  			$(slide).animate({marginLeft: "400px"});
  		}else if($(".sliding").css("marginLeft") === "400px"){
  			$(slide).animate({marginLeft: "-414px"});
  		}
  	});

//HOVER OVER SIDEBAR LINKS

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
