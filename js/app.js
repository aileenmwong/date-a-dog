window.onload = function() {
  console.log('Love meter activated!');

  const $els = {
    lovemeter: document.querySelector('#lovemeter'),
    question: document.querySelector('#question'),
    response: document.querySelector('#response')
  }


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

//win function

//make user questions function

//randomize user questions

//make dog response function

//randomize dog responses

//annouce winner function

//reset function

//add event listener for play button on first page

//add event listener for reset button on second page

//grab user input name and put it in game?


//make startgame function
  //grab the start button
  let playButton = document.querySelector('#play');
  let homepage = document.querySelector('#homepage');
  let gamepage = document.querySelector('#gamepage');
  //when button is clicked, start game
  if(playButton){
  playButton.addEventListener('click', start);
  function start() {
    // //take user to game page
    // location.href='../project-1/index2.html';
    // //store user input value for later use
    homepage.style.visibility='hidden';
    gamepage.style.visibility='visible';
  }
 };

//reset function
  //grab the reset button
  let resetButton = document.querySelector('#reset')
  //when the button is clicked, reset game
  if(resetButton){
  resetButton.addEventListener('click', reset);
  function reset() {
    // //take user back to landing page
    // location.href='../project-1/index.html';
    homepage.style.visibility='visible';
    gamepage.style.visibility='hidden';
  }
  };



}
