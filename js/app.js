window.onload = function() {
  console.log('Love meter activated!');

  const $els = {
    lovemeter: document.querySelector('#lovemeter'),
    question: document.querySelector('#question'),
    response: document.querySelector('#response')
  }
  let player = {
    name: [],
    points: 0,
  }
  let lovemeter = []

//make an array of an object of questions (see picture)
  let questions = [
    {ask: 'What is your favorite color?',
      answers: [
        { word: 'blue',
          points: 0,
        },
        { word: 'pink',
          points: 1,
        },
        { word: 'yellow',
          points: 2,
        },
        { word: 'green',
          points: 3,
        }
        ],
    },
    {ask: 'What is your favorite snack?',
      answers: [
      { word: 'bacon',
        points: 0,
      },
      { word: 'peanuts',
        points: 1,
      },
      { word: 'popcorn',
        points: 2,
      },
      { word: 'carrots',
        points: 3,
      },
      ]
    }
  ]
let dogResponses = ['Are you having a ruff day', 'Ummm...sure OK', 'Ex-squeeze me?']

let currentIndex = 0;


let choiceA = document.querySelector('#choiceA');
let choiceB = document.querySelector('#choiceB');
let choiceC = document.querySelector('#choiceC');
let choiceD = document.querySelector('#choiceD');
let responsebox = document.querySelector('#responsebox');


// //win function
//   function getWinner() {
//     //if (hearts === 18){
//       //winner is printed in the the result box
//       document.querySelector('#lovemeter').innerHTML = 'It\'s a match!';
//       //remove event listener
//     }
//     //else if (hearts === 18){
//       //winner is printed in the the result box
//       document.querySelector('#lovemeter').innerHTML = 'You\'re barking up the wrong tree';
//       //remove event listener
//     };

//make startgame function
  //grab the start button
  let counter = 0;
  let playButton = document.querySelector('#play');
  let homepage = document.querySelector('#homepage');
  let gamepage = document.querySelector('#gamepage');
  //when button is clicked, start game
  if(playButton){
  playButton.addEventListener('click', start);

  function start() {
    //hide home page and show game page
    homepage.style.visibility='hidden';
    gamepage.style.visibility='visible';
    //grab user input name and store it in the object
    let enteredName = document.querySelector('#input').value;
    player.name.push(enteredName);
     //if they input something
    // if (enteredName !== null) {
    //   //adding this player at the index of 0 is equal to the object
    //   alert('Let\'s get our lovin\' on ' + enteredName);
    // }
    makeQuestion(counter);
  }
 };


  //loop through the questions for user to select answer
  function makeQuestion(number) {
    // loop through all of the questions
      let questionask = document.querySelector('#question');
      //print the current question
      questionask.innerHTML = questions[number].ask;
      //loop through all of the answers
      for (let j=0; j < questions[number].answers.length; j++){
        let answer = document.querySelectorAll('.answer');
        //print the current answer
        answer[j].innerHTML = questions[number].answers[j].word;
        //grab the current points
        answer[j].points = questions[number].answers[j].points;
        //store the points in a variable
        let nodePoints = answer[j].points;
        //add event listener
        answer[j].addEventListener('click', function(){
          //stores points - by giving player.points a value
          player.points += nodePoints;
          console.log(player.points);
          //render the points into hearts
          let score = player.points;
          let hearts = ' ';

          //loop through the score
          for (let n=0; n < score; n++) {
          //change the score into a heart
          hearts += '&hearts;'

          }
          document.querySelector('#hearts').innerHTML = hearts;
          dogTalk();
          counter++
        });
      };

    // WHAT IS THE CURRENT QUESTION
    // questions[currentIndex];
    // questionask.innerHTML = questions[currentIndex].ask;
    // choiceA.innerHTML = questions[currentIndex].answers[0].word;
    // choiceB.innerHTML = questions[currentIndex].answers[1].word;
    // choiceC.innerHTML = questions[currentIndex].answers[2].word;
    // choiceD.innerHTML = questions[currentIndex].answers[3].word;
    // choiceA.addEventListener('click', lovemeter);
    // choiceB.addEventListener('click', lovemeter);
    // choiceC.addEventListener('click', lovemeter);
    // choiceD.addEventListener('click', lovemeter);
    //add event listener



  //add to the counter


  // - could put in a conditional that runs every other time except index 0
  // wait for click
  // store value of answer selected
  // make question slide out and dog response slide in
  }
  function nextQuestion () {
    for (let j=0; j < questions[number].answers.length; j++){
      let answer = document.querySelectorAll('.answer');
      answer[j].addEventListener('click', function(){
        makeQuestion();
      });
    }
  }

  // function lovemeter(event) {
  //   // store points in player name
  //   let answer = document.querySelectorAll('.answer');
  //   player.points = answer[event.target].points;
  //   // console.log('the thing we clicked --> ', event.target');
  //   // who got clicked
  //   // for (let i=0; i < questions[i].answers.length; i++)
  //   // what is the current question

  //   // grab value from object clicked
  //   // add value in collector
  //   // loop through collector to add a heart for each value
  //   // push up heart to lovemeter
  //   // when values reach a certain amount, winner is announced and game is over
  //   //
  //   }

//make dog respond
  function dogTalk() {
    const questionbox = document.querySelector('#questionbox')
    const responsebox = document.querySelector('#responsebox')
    responsebox.style.visibility='visible';
    questionbox.style.visibility='hidden';
    for (let i = 0; i < dogResponses.length; i++){
    responsebox.innerHTML = dogResponses[i];
      //have dog talk using user input
      //maybe use math.random
    }
  }

//reset function
  //grab the reset button
  let resetButton = document.querySelector('#reset');
  //when the button is clicked, reset game
  if(resetButton){
  resetButton.addEventListener('click', reset);
  function reset() {
    //hide game page and show home page
    // homepage.style.visibility='visible';
    // gamepage.style.visibility='hidden';
    location.reload();
  }
  };



}

