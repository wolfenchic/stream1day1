$(document).ready(function() {
 
 $("p").click(function() {
 	console.log();
 	$(this).children("a").css("color", "lemonchiffon");
 });
 
 $("a").click(function() {
 $(this).next().css("font-size", "1.5em;");
 });
 
 
 $("p").click(function() {
 	alert("You clicked on a para");
 });
 
 
 $("p").mouseover(function() {
 	$(this).css("color", "lightblue");
 });

 
 $(".bottom_button").mouseenter(function(){
    $(this).fadeTo(1000, 1.0);
});

 $(".bottom_button").mouseout(function(){
    $(this).fadeTo(1000, 0.5);
});
 
 $(".bottom_button").mouseout(function() {
 	$(container).css("background-color", "#4a4a4f");
 });
 
  $("#stream1_btn").mouseover(function() {
 	$(container).css("background-color", "black");
 });
 
 
   $("#stream2_btn").mouseover(function() {
 	$(container).css("background-color", "black");
 });
 
 $("#stream2_btn").mouseout(function() {
 	$(container).css("background-color", "#4a4a4f");
 });
 
  
   $("#stream3_btn").mouseover(function() {
 	$(container).css("background-color", "black");
 });
 
 $("#stream3_btn").mouseout(function() {
 	$(container).css("background-color", "#4a4a4f");
 });
 
 
 $("img").click(function() {
  if ($(this).attr("src") == "img/3.png") {
  	$(this).attr("src", "img/1.png");
  } else if($(this).attr("src")=="img/2.png") {
  	$(this).attr("src", "img/3.png");
  } else if($(this).attr("src")=="img/1.png") {
  	$(this).attr("src", "img/2.png");
  }
  	
 });
  
	

	
	

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 
