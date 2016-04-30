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


  $('.surf').hover(function () {
      // $('.surf').append('<div class="hover-button">' + ' <a  id="code" href="https://github.com/WeesieWilson/surfPaddleTwo" >' + 'Code' + '</a>' + ' <a  id="live" href="/surfPaddleTwo" >' + 'Live' + '</a>' + '</div>');
      $(".surf").addClass("surf-hover");
      $(".surf").siblings(".event").addClass("event-surf-hover");
      $(".surf").siblings(".maid").addClass("maid-surf-hover");
      $(".surf").siblings(".must").addClass("must-surf-hover");
      $(".surf").siblings(".jeo").addClass("jeo-surf-hover");
      $(".surf").siblings(".todo").addClass("todo-surf-hover");
  }
  ,function () {
      // $(".hover-button").remove();
      $(".surf").removeClass("surf-hover");
      $(".surf").siblings(".event").removeClass("event-surf-hover");
      $(".surf").siblings(".maid").removeClass("maid-surf-hover");
      $(".surf").siblings(".must").removeClass("must-surf-hover");
      $(".surf").siblings(".jeo").removeClass("jeo-surf-hover");
      $(".surf").siblings(".todo").removeClass("todo-surf-hover");

  })

  $('.surf').click(function(){
    $(".surf").parent().closest('.work-wrapper').addClass("surf-page");
    console.log('ive been clicked');
  });
  $('.event').click(function(){
    $(".event").parent().closest('.work-wrapper').addClass("event-page");
    console.log('ive been clicked');
  });
  $('.todo').click(function(){
    $(".todo").parent().closest('.work-wrapper').addClass("todo-page");
    console.log('ive been clicked');
  });

  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("surf-page");
    console.log('ive been clicked');
  });
  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("event-page");
    console.log('ive been clicked');
  });

  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("todo-page");
    console.log('ive been clicked');
  });



  $('.event').hover(function () {
      // $('.event').append(' <a  id="button" href="https://github.com/WeesieWilson/surfPaddleTwo" >' + 'Code' + '</a>');
      $(".event").addClass("event-hover");
      $(".event").siblings(".surf").addClass("surf-event-hover");
      $(".event").siblings(".maid").addClass("maid-event-hover");
      $(".event").siblings(".must").addClass("must-event-hover");
      $(".event").siblings(".jeo").addClass("jeo-event-hover");
      $(".event").siblings(".todo").addClass("todo-event-hover");
  }
  ,function () {
      $("#button").remove();
      $(".event").removeClass("event-hover");
      $(".event").siblings(".surf").removeClass("surf-event-hover");
      $(".event").siblings(".maid").removeClass("maid-event-hover");
      $(".event").siblings(".must").removeClass("must-event-hover");
      $(".event").siblings(".jeo").removeClass("jeo-event-hover");
      $(".event").siblings(".todo").removeClass("todo-event-hover");

  })

  $('.maid').hover(function () {
      // $('.maid').append(' <a  id="button" href="https://github.com/WeesieWilson/surfPaddleTwo" >' + 'Code' + '</a>');
      $(".maid").addClass("maid-hover");
      $(".maid").siblings(".surf").addClass("surf-maid-hover");
      $(".maid").siblings(".event").addClass("event-maid-hover");
      $(".maid").siblings(".must").addClass("must-maid-hover");
      $(".maid").siblings(".jeo").addClass("jeo-maid-hover");
      $(".maid").siblings(".todo").addClass("todo-maid-hover");
  }
  ,function () {
      // $("#button").remove();
      $(".maid").removeClass("maid-hover");
      $(".maid").siblings(".surf").removeClass("surf-maid-hover");
      $(".maid").siblings(".event").removeClass("event-maid-hover");
      $(".maid").siblings(".must").removeClass("must-maid-hover");
      $(".maid").siblings(".jeo").removeClass("jeo-maid-hover");
      $(".maid").siblings(".todo").removeClass("todo-maid-hover");

  });


  $('.todo').hover(function () {
      // $('.todo').append(' <a  id="button" href="/todo" >' + 'Live' + '</a>');
      $(".todo").addClass("todo-hover");
      $(".todo").siblings(".surf").addClass("surf-todo-hover");
      $(".todo").siblings(".maid").addClass("maid-todo-hover");
      $(".todo").siblings(".must").addClass("must-todo-hover");
      $(".todo").siblings(".jeo").addClass("jeo-todo-hover");
      $(".todo").siblings(".event").addClass("event-todo-hover");
  }
  ,function () {
      $("#button").remove();
      $(".todo").removeClass("todo-hover");
      $(".todo").siblings(".surf").removeClass("surf-todo-hover");
      $(".todo").siblings(".maid").removeClass("maid-todo-hover");
      $(".todo").siblings(".must").removeClass("must-todo-hover");
      $(".todo").siblings(".jeo").removeClass("jeo-todo-hover");
      $(".todo").siblings(".event").removeClass("event-todo-hover");

  })




  $('.must').hover(function () {
      // $('.todo').append(' <a  id="button" href="/todo" >' + 'Live' + '</a>');
      $(".must").addClass("must-hover");
      $(".must").siblings(".surf").addClass("surf-must-hover");
      $(".must").siblings(".maid").addClass("maid-must-hover");
      $(".must").siblings(".todo").addClass("todo-must-hover");
      $(".must").siblings(".jeo").addClass("jeo-must-hover");
      $(".must").siblings(".event").addClass("event-must-hover");
  }
  ,function () {
      // $("#button").remove();
      $(".must").removeClass("must-hover");
      $(".must").siblings(".surf").removeClass("surf-must-hover");
      $(".must").siblings(".maid").removeClass("maid-must-hover");
      $(".must").siblings(".todo").removeClass("todo-must-hover");
      $(".must").siblings(".jeo").removeClass("jeo-must-hover");
      $(".must").siblings(".event").removeClass("event-must-hover");

  })








});
