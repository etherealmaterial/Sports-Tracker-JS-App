const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Scoot',
      lastName: 'Brown',
      age: 30
    },
    {
      firstName: 'Bob',
      lastName: 'Burns',
      age: 51
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Sharks',
      teamPoints: 11,
      opponentPoints: 23
    },
    {
      opponent: 'Geese',
      teamPoints: 43342,
      opponentPoints: 4545
    }
  ],
  get games() {
       return this._games;
   },
   get players() {
       return this._players;
   },
   addPlayer(firstName, lastName, age) {
     let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
 
    this.players.push(player);
   },
   addGame(opponent, teamPoints, opponentPoints) {
     let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
 
    this.games.push(game);
   }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Frogs', 200, 44);
team.addGame('Momo', 300, 55);

console.log(team);