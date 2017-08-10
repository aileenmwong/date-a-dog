window.onload = function() {
  console.log('Love meter activated!');

  const $els = {
    lovemeter: document.querySelector('#lovemeter'),
    question: document.querySelector('#question'),
    response: document.querySelector('#response')
  }
  let nameCollector = [];

//make an array of an object of questions (see picture)
  let questions = [
    {question1: 'What is your favorite color?',
      answers: [
        { word: 'blue',
          points: 0,
        },
        { word: 'pink',
          points: 1,
        },
        ],
    },
    {question2: 'What is your favorite snack?',
      answers: [
      { word: 'bacon',
        points: 0,
      },
      { word: 'peanuts',
        points: 1,
      },
      ]
    }
  ]

console.log(questions.question2);

//USER QUESTIONS
//make user questions populate function
//box slides in
//randomize user questions
//question appears
//user selects answer
//store answer
//box slides out

//LOVEMETER FUNCTION
//store value from answer
//push hearts into lovemeter

//DOG RESPONSE FUNCTION
//dog response box slides in
//make dog response function
//randomize dog responses
//have dog use user input

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
    //grab user input name and store it in the collector array
    let enteredName = document.querySelector('#input').value;
    nameCollector.push(enteredName);
     //if they input something
    // if (enteredName !== null) {
    //   //adding this player at the index of 0 is equal to the object
    //   alert('Let\'s get our lovin\' on ' + enteredName);
    // }
  }
 };

//reset function
  //grab the reset button
  let resetButton = document.querySelector('#reset')
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
