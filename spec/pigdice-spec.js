import { Game } from './../src/pigdice.js'
import { Player } from './../src/pigdice.js'
describe('Game', function() {

  var game;
  
  beforeEach(function() {
    game = new Game();
    var player1 = new Player("darrion");
    var player2 = new Player("dustin");
    game.addNewPlayer(player1);
    game.addNewPlayer(player2);
    player1.status = true;
  })

  // constructor
  it('should create a constructor', function() {
    expect(game.currentId).toEqual(1);
  });

  // addNewPlayer
  it('should add a new player', function() {
    var expected = "darrion";
    expect(game.players[0].playerName).toEqual(expected);
  });

  // changeStatus
  it('should change status of player1', function() {
    game.changeStatus();
    expect(game.players[0].status).toEqual(false);
  });

  // ends a players turn
  it('should end a players turn and reset their score', function() {
    game.players[0].endTurn();
    expect(game.players[0].status).toEqual(false);
  });

  // ends a players turn and resets score to 0
  it('should end a players turn and reset their score', function() {
    game.players[0].endTurn();
    expect(game.players[0].turnScore).toEqual(0);
  });

  // rolling a number > 1 the turn score is incremented by the roll amount
  for(var i=0; i < 10; i++){
    it('rolldice is in  [0,6]', function(){
      var player = game.players[0];
      player.rollDice();
      expect(player.diceRoll >= 1 && player.diceRoll <= 6).toBeTruthy();
    })
  }

});