var config = {
  apiKey: "AIzaSyDachk_9QujOsIUtMu__GyBCyN6CmqUt10",
  authDomain: "creative-project-142a8.firebaseapp.com",
  databaseURL: "https://creative-project-142a8.firebaseio.com",
  projectId: "creative-project-142a8",
  storageBucket: "creative-project-142a8.appspot.com",
  messagingSenderId: "198107992369"
};
firebase.initializeApp(config);

var db = firebase.firestore();

var game_id_link = location.search.split('?')[1];
var currentPlayer = location.search.split('?')[2];
var newGame = db.collection('new_game');
var thisGame = db.collection('new_game').doc(game_id_link);

rounds = "round1";

var gameState;
var checkPlayer1 = "player1";
var checkPlayer2 = "player2";

console.log(currentPlayer);

if(currentPlayer == checkPlayer2){
setInterval(function(){
  thisGame.collection(rounds).doc(rounds).get().then((s) =>{
     gameState = s.data().game_state;
     console.log(gameState);

     if(gameState == "described"){
      window.location.href = "http://127.0.0.1:5500/gridImg.html" + "?" + game_id_link + "?" + currentPlayer ;

     }

  });
},1000);
}

if(currentPlayer == checkPlayer1){
  setInterval(function(){
    thisGame.collection(rounds).doc(rounds).get().then((s) =>{
       gameState = s.data().game_state;
       console.log(gameState);
  
       if(gameState == "finished_correct"){
        window.location.href = "http://127.0.0.1:5500/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
  
       } else if(gameState == "finished_wrong"){
        window.location.href = "http://127.0.0.1:5500/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
       }
  
    });
  },1000);
  }