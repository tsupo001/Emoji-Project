
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
  
  
  var user_age = document.getElementById("join-usr-age");
  
  
  var new_name = document.getElementById("join_name_input");
  var new_game = document.getElementById("join_game_id");
  
  const join_new_form = document.querySelector('#join-new-game');

  var rounds = "0";
  
  
  join_new_form.addEventListener('submit', (e) => {
    console.log('button pressed')
    e.preventDefault();
    console.log(new_game.value, user_age.value);
  
  
    // db.collection('new_game').add({
    //   users: new_name.value,
    //   game_id: new_game.value,
    //   age_group: user_age.value
    // });
  
  rounds = "round1";
  
   // window.location.reload(false); 
  
    //new_name.value = '';
    // new_game.value = '';
  
    var newGame = db.collection('new_game');
    var thisGame = db.collection('new_game').doc(new_game.value);


    db.collection('new_game').doc(new_game.value).update({
      player2: new_name.value,
      player2_age: user_age.value
    });
    
    thisGame.collection(rounds).doc(rounds).set({
      emoji_describer: "player1",
      guesser: "player2",
      game_state: "describing"
    });

    var currentPlayer = "player2";

    var id  = new_game.value;

    var link = "http://127.0.0.1:5500/lobby.html?" + id + "?" + currentPlayer;

  console.log(link);

  setTimeout(function(){ 


    window.location.href = link;
  
    
  
  }, 1000);

    
    
  //   var query = newGame.where('game_id', '==', new_game.value).get().then((snapshot) => {
  //     snapshot.docs.forEach(doc => {
  //       console.log(doc.data())
  //       var x = doc.data();
  //       var y = x.game_id;
  //       console.log(y);
      
  //       // snapshot.docs.forEach(doc => {
  //       //     console.log(doc.data())
  //       //     renderGame(doc);
  //       //   })
  //       if(x.game_id == new_game.value){
  //         console.log("game id exists");
    
  //         db.collection('new_game').update({
  //           users: x.users + new_name.value,
  //           game_id: x.game_id,
  //           age_group: x.age_group + user_age.value
  //         });
  //         // 
  //       }else{
  //         console.log("error");
    
  //       }
  //   })

    
  // })


  })

  //console.log(gameState);

  
  
  
  