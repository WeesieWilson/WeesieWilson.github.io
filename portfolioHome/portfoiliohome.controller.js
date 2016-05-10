angular
.module('portfolioHome')
.controller('PortfolioCtrl', function ($rootScope,$scope,$location, $anchorScroll) {

// SIDEBAR SLIDER

    var slide = $(".sliding");
    $(slide).animate({marginLeft: "-414px"});
    $(".button").on("click", function(){
  		if($(slide).css("marginLeft") === "-414px"){
  			$(slide).animate({marginLeft: "400px"});
        $(".button").animate({marginLeft: "365px"});
  		}else if($(".sliding").css("marginLeft") === "400px"){
  			$(slide).animate({marginLeft: "-414px"});
        $(".button").animate({marginLeft: "385px"});
  		}
  	});



  $('.surf').hover(function () {
      $(".surf").addClass("surf-hover");
      $(".surf").siblings(".event").addClass("event-surf-hover");
      $(".surf").siblings(".maid").addClass("maid-surf-hover");
      $(".surf").siblings(".must").addClass("must-surf-hover");
      $(".surf").siblings(".jeo").addClass("jeo-surf-hover");
      $(".surf").siblings(".todo").addClass("todo-surf-hover");
  }
  ,function () {
      $(".surf").removeClass("surf-hover");
      $(".surf").siblings(".event").removeClass("event-surf-hover");
      $(".surf").siblings(".maid").removeClass("maid-surf-hover");
      $(".surf").siblings(".must").removeClass("must-surf-hover");
      $(".surf").siblings(".jeo").removeClass("jeo-surf-hover");
      $(".surf").siblings(".todo").removeClass("todo-surf-hover");

  })

  $('.surf').click(function(){
    $(".surf").parent().closest('.work-wrapper').addClass("surf-page");
  });
  $('.event').click(function(){
    $(".event").parent().closest('.work-wrapper').addClass("event-page");
  });
  $('.todo').click(function(){
    $(".todo").parent().closest('.work-wrapper').addClass("todo-page");
  });
  $('.must').click(function(){
    $(".must").parent().closest('.work-wrapper').addClass("must-page");
  });
  $('.jeo').click(function(){
    $(".jeo").parent().closest('.work-wrapper').addClass("jeo-page");
  });
  $('.maid').click(function(){
    $(".maid").parent().closest('.work-wrapper').addClass("maid-page");
  });

  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("surf-page");
  });
  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("maid-page");
  });
  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("event-page");
  });

  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("todo-page");
  });
  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("must-page");
  });
  $('.projects-aside').click(function(){
    $(".projects-aside").parent().parent().removeClass("jeo-page");
  });



  $('.event').hover(function () {
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
      $(".maid").addClass("maid-hover");
      $(".maid").siblings(".surf").addClass("surf-maid-hover");
      $(".maid").siblings(".event").addClass("event-maid-hover");
      $(".maid").siblings(".must").addClass("must-maid-hover");
      $(".maid").siblings(".jeo").addClass("jeo-maid-hover");
      $(".maid").siblings(".todo").addClass("todo-maid-hover");
  }
  ,function () {
      $(".maid").removeClass("maid-hover");
      $(".maid").siblings(".surf").removeClass("surf-maid-hover");
      $(".maid").siblings(".event").removeClass("event-maid-hover");
      $(".maid").siblings(".must").removeClass("must-maid-hover");
      $(".maid").siblings(".jeo").removeClass("jeo-maid-hover");
      $(".maid").siblings(".todo").removeClass("todo-maid-hover");

  });


  $('.todo').hover(function () {
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
      $(".must").addClass("must-hover");
      $(".must").siblings(".surf").addClass("surf-must-hover");
      $(".must").siblings(".maid").addClass("maid-must-hover");
      $(".must").siblings(".todo").addClass("todo-must-hover");
      $(".must").siblings(".jeo").addClass("jeo-must-hover");
      $(".must").siblings(".event").addClass("event-must-hover");
  }
  ,function () {
      $(".must").removeClass("must-hover");
      $(".must").siblings(".surf").removeClass("surf-must-hover");
      $(".must").siblings(".maid").removeClass("maid-must-hover");
      $(".must").siblings(".todo").removeClass("todo-must-hover");
      $(".must").siblings(".jeo").removeClass("jeo-must-hover");
      $(".must").siblings(".event").removeClass("event-must-hover");

  })


  $('.jeo').hover(function () {
      $(".jeo").addClass("jeo-hover");
      $(".jeo").siblings(".event").addClass("event-jeo-hover");
      $(".jeo").siblings(".maid").addClass("maid-jeo-hover");
      $(".jeo").siblings(".must").addClass("must-jeo-hover");
      $(".jeo").siblings(".surf").addClass("surf-jeo-hover");
      $(".jeo").siblings(".todo").addClass("todo-jeo-hover");
  }
  ,function () {
      $(".jeo").removeClass("jeo-hover");
      $(".jeo").siblings(".event").removeClass("event-jeo-hover");
      $(".jeo").siblings(".maid").removeClass("maid-jeo-hover");
      $(".jeo").siblings(".must").removeClass("must-jeo-hover");
      $(".jeo").siblings(".surf").removeClass("surf-jeo-hover");
      $(".jeo").siblings(".todo").removeClass("todo-jeo-hover");

  })








});
