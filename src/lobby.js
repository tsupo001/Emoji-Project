

//initialize Firebase
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

//   var new_game = document.getElementById("game_id");


//   const playerList = document.querySelector('#players');
//   const theID = document.querySelector('#id');


//   function renderGame(doc){
//     let li = document.createElement('li');
//     let users = document.createElement('span');
//     let div = document.createElement('div');
//     let game_id = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     users.textContent = currentPlayer;
//     //game_id.textContent = doc.data().game_id

//     console.log(users, game_id);

//     li.appendChild(users);

//     playerList.appendChild(li);

//     div.appendChild(game_id);
//     theID.appendChild(div);


// }


// console.log(new_game.value)
var game_id_link = location.search.split('?')[1];
var currentPlayer = location.search.split('?')[2];
console.log(currentPlayer);
console.log(game_id_link);
var newGame = db.collection('new_game');
    
    // var query = newGame.doc(link).get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //         console.log(doc.data())
    //         renderGame(doc);
    //       })

    // })

    $("#currentId").append(game_id_link);
    $("#currentPlayer").append(currentPlayer);




    setInterval(function(){

   
  newGame.doc(game_id_link).get().then((s)=>{
    var player1 = s.data().player1;
    var player2 = s.data().player2;
    //console.log(player1);
    //console.log(player2);
  
    //renderGame(s.data());

    $("#players").empty();

    $("#players").append(`<li>${player1}</li>`);

    if(typeof(player2) !== "undefined"){
    $("#players").append(`<li>${player2}</li>`);
    }
    
    
  })

  var checkPlayer1 = "player1";
  var checkPlayer2 = "player2";


  var startGame = document.getElementById("start-game");

  startGame.addEventListener("click", function(){
    if(currentPlayer == checkPlayer1){
      //alert('you are the describer!');
      setTimeout(function(){ 

        
        window.location.href = "http://127.0.0.1:5500/targetImg.html" + "?" + game_id_link + "?" + checkPlayer1 ;
      
        
      
      }, 1000);
    }else if(currentPlayer == checkPlayer2){
      //alert('waiting for player 1 to describe!');
      setTimeout(function(){ 

        
        window.location.href = "http://127.0.0.1:5500/loading.html" + "?" + game_id_link  + "?" + checkPlayer2 ;
      
        
      
      }, 1000);
    }
  });

},1000);






    
    