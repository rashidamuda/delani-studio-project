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
    })
})
});