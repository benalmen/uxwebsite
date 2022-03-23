$(".themeChange").on("click", function(){
  if ($(this).hasClass("regular")) {
    $("#theme").attr("href", "css/blank.css")
  }
  else if ($(this).hasClass("blue")){
    $("#theme").attr("href", "css/blue.css")
  }
  else if ($(this).hasClass("dark")){
    $("#theme").attr("href", "css/dark.css")
  }
});



<link rel="stylesheet" href="css/blank.css" id="theme" type="text/css">

<div class="theme_button">
  <div class="w3-button themeChange regular">Regular</div>
  <div class="w3-button themeChange blue">Blue</div>
  <div class="w3-button themeChange dark">Dark</div>
</div>