// const express = require('express')
// const app = express()
// const firebase = require('firebase')

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




// //$(document).ready(() => {

//   //an array of categories
//   const categories = ['activities', 'animals', 'cats', 'food', 'places', 'random'];
//   //6 images in a grid
//   const imagesInGrid = 6;
//   //random the categories using the function below and picking 1 out of 6 by generating random number between 0-5
//   const chosenCategory = categories[randomNumber(categories.length)];
//   //randoms the image in the same respect
//   const chosenImage = randomNumber(imagesInGrid);

//   console.log(chosenCategory, chosenImage);

//   //loop through all the 6 images in the grid and draw them, connect to html using the id=grid
//   for (let i = 0; i < imagesInGrid; i++) {
//     $('section#grid').append(`
//       <div class="media">
//         <img src="images/${chosenCategory}/${i}.jpg">
//       </div>
//     `)
//   }


//   //randoms 1 image from 6 catagories, later I need to see which categories I have randomised and only random img from that specific categories

//   $('section#singleImg').append(`
//     <div class="media">
//       <img src="images/${chosenCategory}/${chosenImage}.jpg">
//     </div>
//   `)
//   //function to random number between 0-5
//   function randomNumber(max) {
//     return Math.floor(Math.random() * max)
//   }


// //read data
// db.collection('session').get().then((snapshot) => {
//   // console.log(snapshot.docs);
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
// })


//adding data
// var new_name = document.getElementById("name_input");
// var new_game = document.getElementById("game_id");

// const new_form = document.querySelector('#new-game');

// new_form.addEventListener('submit', (e) => {
//   console.log('button pressed')
//   e.preventDefault();
//   console.log(new_name.value, new_game.value);

//   db.collection('session').add({
//     name: new_name.value,
//     game_id: new_game.value
//   });

//  // window.location.reload(false); 

//   new_name.value = '';
//   new_game.value = '';

// })

var user_age = document.getElementById("usr-age");


// var new_name = document.getElementById("name_input");
// var new_game = document.getElementById("game_id");

const new_form = document.querySelector('#new-game');


new_form.addEventListener('submit', (e) => {
  console.log('button pressed')
  e.preventDefault();
  console.log(makeid(), user_age.value);
  ;

  db.collection('new_game').doc(makeid()).set({
    users: "player1",
    age_group: user_age.value
  });



 // window.location.reload(false); 

 // new_name.value = '';
  // new_game.value = '';

})

//generate game_id
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

