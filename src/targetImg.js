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

  //$(document).ready(() => {

  //an array of categories
  const categories = ['activities', 'animals', 'cats', 'food', 'places', 'random'];
  //6 images in a grid
  const imagesInGrid = 6;
  //random the categories using the function below and picking 1 out of 6 by generating random number between 0-5
  const chosenCategory = categories[randomNumber(categories.length)];
  //randoms the image in the same respect
  const chosenImage = randomNumber(imagesInGrid);

  console.log(chosenCategory, chosenImage);

  //loop through all the 6 images in the grid and draw them, connect to html using the id=grid
  for (let i = 0; i < imagesInGrid; i++) {
    $('section#grid').append(`
      <div class="media">
        <img src="images/${chosenCategory}/${i}.jpg">
      </div>
    `)
  }


  //randoms 1 image from 6 catagories, later I need to see which categories I have randomised and only random img from that specific categories

  $('section#singleImg').append(`
    <div class="media">
      <img src="images/${chosenCategory}/${chosenImage}.jpg">
    </div>
  `)
  //function to random number between 0-5
  function randomNumber(max) {
    return Math.floor(Math.random() * max)
  }

  var rounds = "round1";

  const emoji_form = document.querySelector('#emoji_guess');
  var user_emoji = document.getElementById("emoji_input");
  var newGame = db.collection('new_game');
var game_id_link = location.search.split('?')[1];
var currentPlayer = location.search.split('?')[2];
var thisGame = db.collection('new_game').doc(game_id_link);


console.log(game_id_link);
console.log(currentPlayer);

  emoji_form.addEventListener('submit', (q) => {
    console.log("button pressed")
    q.preventDefault();
    console.log(chosenCategory, chosenImage, user_emoji.value, currentPlayer);
  
  
    thisGame.collection(rounds).doc(rounds).update({
      grid: chosenCategory,
      target_img: chosenImage,
      emoji: user_emoji.value,
      emoji_describer: currentPlayer,
      game_state: "described"
      
    })
    setTimeout(function(){ 


      window.location.href = "http://127.0.0.1:5500/loading.html" + "?" + game_id_link + "?" + currentPlayer ;
    
      
    
    }, 1000);
    

  })

  
  
//})