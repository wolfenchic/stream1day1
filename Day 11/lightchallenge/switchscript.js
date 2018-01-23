$(document).ready(function() {
    
  $("#switch1").click(function() {
  if ($("#bulb1").attr("src") == "img/bulbon.gif") {
      $("#bulb1").attr("src", "img/bulboff.gif");
      $("#switch1").attr("src", "img/switch_off.png");
 } else {
     $("#bulb1").attr("src", "img/bulbon.gif");
      $("#switch1").attr("src", "img/switch_on.png");
     
  }
  	
 });
 
   $("#switch2").click(function() {
  if ($("#bulb2").attr("src") == "img/bulbon.gif") {
      $("#bulb2").attr("src", "img/bulboff.gif");
      $("#switch2").attr("src", "img/switch_off.png");
 } else {
     $("#bulb2").attr("src", "img/bulbon.gif");
      $("#switch2").attr("src", "img/switch_on.png");
     
 }
     
  });
  
  
   $("#switch3").click(function() {
  if ($("#bulb3").attr("src") == "img/bulbon.gif") {
      $("#bulb3").attr("src", "img/bulboff.gif");
      $("#switch3").attr("src", "img/switch_off.png");
 } else {
     $("#bulb3").attr("src", "img/bulbon.gif");
      $("#switch3").attr("src", "img/switch_on.png");

     
 }
     
  });
  
});
