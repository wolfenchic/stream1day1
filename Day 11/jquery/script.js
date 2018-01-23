$(document).ready(function(){
    

/* $(".container").click(function() {
 	$(".container").hide();
 });

});

/*$(".theButton").click(function() {
 	$(this).hide();
 });*/

$(".container").click(function() {
 $(this).siblings().fadeTo(1000, 0.1);
 });

$(".superButton").click(function() {
 $(".container").fadeTo(500, 1);
 });

$(".theButton").mouseover(function() {
 $(this).css("background-color", "black");
 });

$(".theButton").mouseleave(function() {
 $(this).css("background-color", "");
 });

 
});