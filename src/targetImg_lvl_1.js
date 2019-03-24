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

  const emoji_form = document.querySelector('#emoji_guess');
  var user_emoji = document.getElementById("emoji_input");

  const describer = db.collection('img_described').doc('lvl_1');
  
  emoji_form.addEventListener('submit', (q) => {
    console.log("button pressed")
    q.preventDefault();
    console.log(chosenCategory, chosenImage, user_emoji.value);
  
  
    db.collection('img_described').doc('lvl_1').collection('emoji_lvl1').add({
      grid: chosenCategory,
      target_img: chosenImage,
      emoji: user_emoji.value
    })
    user_emoji.value = '';
  })
  
//})