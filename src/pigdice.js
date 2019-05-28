import $ from 'jquery';

export function someFunction(input){
    return input;
}

export function Game(){
    this.currentId = -1,
    this.players = [];
  }
  
  Game.prototype.addNewPlayer = function(player) {
    this.currentId ++;
    player.playerId = this.currentId;
    this.players.push(player);
  }
  
  Game.prototype.changeStatus = function() {
    var length = this.players.length;
    console.log(this.players);
    console.log(this.players[0].status);
    console.log(length);
      if(this.players[length - 1 ].status === true) {
        this.players[length - 1].status = false;
        this.players[0].status = true;
      } else {
  
        for(var i=0; i < length; i++){
          if (this.players[i].status === true){
            this.players[i].status = false;
            this.players[i + 1].status = true;
            break;
        }
      }
    }
  }
  
  
  // Busi
    export function Player(playerName) {
      this.playerId = 0,
      this.playerName = playerName,
      this.diceRoll = 0,
      this.turnScore = 0,
      this.totalScore = 0,
      this.status = false
    }
  
    Player.prototype.rollDice = function() {
      var roll =  Math.floor((Math.random() * 6) +1);
      if (roll === 1) {
        this.diceRoll = 1;
        this.turnScore = 0;
        // alert("you rolled a one. Turn Over")
        this.endTurn();
      } else {
        this.diceRoll = roll;
        this.turnScore += roll;
      }
    }
  
    Player.prototype.endTurn = function(){
      this.totalScore += this.turnScore;
      this.turnScore = 0;
      this.status = false;
      // alert("turn is over");
      this.scoreCheck();
    }
  
    Player.prototype.scoreCheck = function() {
      if (this.totalScore >= 20) {
        alert("Winner Winner Bacon Dinner");
        this.status = false;
        //playAgain = true
      }
    }
  
  
  
  var player1 = new Player("Dustin");
  var player2 = new Player("Marc");
  
  // on rollDiceClick
  
  $(function() {
    var game = new Game();
    game.addNewPlayer(player1);
    game.addNewPlayer(player2);
  
    player1.status = true;
    $(".rollDice").on("click", function(){

      player1.rollDice();
      $(".diceScore").text(player1.diceRoll);
      $(".turnScore").text(player1.turnScore);
    })
  // hold on click
    $(".hold").on( "click", function(){
      player1.endTurn();
      $(".totalScore").text(player1.totalScore);
    })
  });
  