onEvent("button1", "click", function( ) {
  timedLoop(100, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("Olivia-Rodrigo---Cant-Catch-Me-Now-(Lyrics).mp3", false);
});
onEvent("text_input1", "click", function( ) {
  setProperty("screen1", "image", "https://i.pinimg.com/1200x/88/2c/9a/882c9a9467c0d7b1cf5adbe7b95f84e1.jpg");
});
