new TypeIt('#hello', {
    speed: 50,
    waitUntilVisible: true,
    cursorChar : '|'
  })
  .type('Welcome to Calum.GQ Games!')
  .pause(500)
  .break()
  .break()
  .type('<a href="/darkdarkhouse">A Dark, Dark House</a>')
  .pause(50)
  .break()
  .type('<a href="https://caburum.ga/Chrome-Dino-Runner">Chrome Dino Runner 2</a>')
  .pause(50)
  .break()
  .type('<a href="https://caburum.ga/Depression-Game">Depression Game</a>')
  .pause(50)
  .break()
  .type('<a href="http://orteil.dashnet.org/igm/?g=https://raw.githubusercontent.com/caburum-games/Computer-Clicker/master/game.txt">Computer Clicker Beta</a>')
  .pause(50)
  .break()
  .type('<a href="https://dos.caburum.ga">MS-DOS Games</a>')
  .pause(500)
  .break()
  .type('<a href="https://github.calum.gq/html/flappy-block.html">Flappy Block</a>')
  .pause(500)
  .break()
  .type('<a href="https://github.calum.gq/html/snake.html">Snake</a>')
  .pause(500)
  .break()
  .type('<a href="https://github.calum.gq/html/breakout.html">Breakout</a>')
  .pause(500)
  .break()
  .type('<a href="https://hexgl2.caburum.ga">HexGL2</a>')
  .pause(500)
  .break()
  .type('<a href="https://caburum.ga/cookieclicker">Cookie Clicker</a>')
  .pause(500)
  .break()
  .break()
  .type('<a href="https://calum.gq">Main Site</a>')
  .go();

function skipAnimation {
  instance.destroy(removeCursor?: false);
}

$(document).ready(function() {
    $(".skip").on("click", function(){
        alert("clicked");
        instance.destroy(removeCursor?: false);
    }); 
});
