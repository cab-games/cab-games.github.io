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
  .type('<a href="https://dos.calum.gq">MS-DOS Games</a>')
  .pause(500)
  .break()
  .break()
  .type('<a href="https://calum.gq">Home</a>')
  .go();