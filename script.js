new TypeIt('#typeit', {
    speed: 50,
    waitUntilVisible: true,
    cursorChar : '|'
  })
  .type('Welcome to cab-games!')
  .pause(500)
  .break()
  .break()
  .type('<a href="/darkdarkhouse">A Dark, Dark House</a>')
  .pause(50)
  .break()
  .type('<a href="/Chrome-Dino-Runner">Chrome Dino Runner 2</a>')
  .pause(50)
  .break()
  .type('<a href="/Depression-Game">Depression Game</a>')
  .pause(50)
  .break()
  /*.type('<a href="http://orteil.dashnet.org/igm/?g=www.caburum.ga/Computer-Clicker/game.txt">Computer Clicker Beta</a>')
  .pause(50)
  .break()*/
  .type('<a href="https://js-dos-live-1.ccreativecnd.repl.co">MS-DOS Games</a>')
  .pause(50)
  .break()
  .type('<a href="/html-game-tests">HTML Game Tests</a>')
  .pause(50)
  .break()
  .type('<a href="https://hexgl2.ccreativecnd.repl.co">HexGL2</a>')
  .pause(50)
  .break()
  .type('<a href="/cookieclicker">Cookie Clicker</a>')
  .pause(50)
  .break()
  .type('<a href="/universal-paperclips">Universal Paperclips</a>')
  .pause(50)
  .break()
  .type('<a href="/minesweeper">Minesweeper</a>')
//  .pause(500)
//  .break()
//  .break()
//  .type('<a href="https://calum.gq">Main Site</a>')
  .exec(async () => {
    $(".skip").remove();
  })
  .go();

$(document).ready(function() {
  $(".skip").on("click", function(){
      $("#typeit-container").remove();
      $("#text").removeClass("text");
      $(".skip").remove();
  }); 
});
