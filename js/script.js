$(document).ready(function() {
  $(".show1").click(function() {
    $("#hide1").toggle();
    $(".img-hidden1").toggle();
  });

  $(".show2").click(function() {
    $("#hide2").toggle();
    $(".img-hidden2").toggle();
  });
  $(".show3").click(function() {
    $("#hide3").toggle();
    $(".img-hidden3").toggle();
  });

  $(".img4").hover(function() {
    $(".overlay4").show();
    $(".img4").mouseleave(function() {
      $(".overlay4").hide();
    });
  });
  $(".img1").hover(function() {
    $(".overlay1").show();
    $(".img1").mouseleave(function() {
      $(".overlay1").hide();
    });
  });
  $(".img2").hover(function() {
    $(".overlay2").show();
    $(".img2").mouseleave(function() {
      $(".overlay2").hide();
    });
  });
  $(".img3").hover(function() {
    $(".overlay3").show();
    $(".img3").mouseleave(function() {
      $(".overlay3").hide();
    });
  });
  $(".img5").hover(function() {
    $(".overlay5").show();
    $(".img5").mouseleave(function() {
      $(".overlay5").hide();
    });
  });
  $(".img6").hover(function() {
    $(".overlay6").show();
    $(".img6").mouseleave(function() {
      $(".overlay6").hide();
    });
  });
  $(".img7").hover(function() {
    $(".overlay7").show();
    $(".img7").mouseleave(function() {
      $(".overlay7").hide();
    });
  });
  $(".img8").hover(function() {
    $(".overlay8").show();
    $(".img8").mouseleave(function() {
      $(".overlay8").hide();
    });
  });
  $("form").submit (function(event) {
      var name=$("#name").val();
      alert("Thankyou" + name + "for getting back to us!");
  });
});
