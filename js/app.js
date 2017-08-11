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
    },
    {ask: 'What is your favorite activity?',
      answers: [
      { word: 'running',
        points: 0,
      },
      { word: 'sleeping',
        points: 1,
      },
      { word: 'snacking',
        points: 2,
      },
      { word: 'farting',
        points: 3,
      },
      ]
    },
  ]
let dogResponses = ['Are you having a ruff day', 'Ummm...sure OK', 'Ex-squeeze me?']

let currentIndex = 0;
let counter = 0;
let choiceA = document.querySelector('#choiceA');
let choiceB = document.querySelector('#choiceB');
let choiceC = document.querySelector('#choiceC');
let choiceD = document.querySelector('#choiceD');
let responsebox = document.querySelector('#responsebox');
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
      //call the makeQuestion function at the counter
      makeQuestion(counter);
    }
  };


  function makeQuestion(number) {
    const questionbox = document.querySelector('#questionbox')
    const responsebox = document.querySelector('#responsebox')
    responsebox.style.visibility='hidden';
    questionbox.style.visibility='visible';
    // loop through all of the questions
    // for (let i=0; i < questions[number].length; i++) {
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
      }
      questionbox.addEventListener('click', function(){
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
            console.log(hearts)
          }
          document.querySelector('#hearts').innerHTML = hearts;
          dogTalk();
          //add to the counter
        counter++
        });
        console.log(counter);

      };
    // }
  }

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

//make dog respond
  function dogTalk() {
    const questionbox = document.querySelector('#questionbox')
    const responsebox = document.querySelector('#responsebox')
    const nextbutton = document.querySelector('#next')
    //hide response box and show question box
    responsebox.style.visibility='visible';
    questionbox.style.visibility='hidden';
    //loop through the responses and grab a random response
    for (var i = dogResponses.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    responsebox.innerHTML = dogResponses[j] + ' ' + player.name;
    }
    //push used answer into an array
    //check array if answer is used, then dont use it
    //if not randomize again

    //add a click function to make the next question
      if (nextbutton) {
      nextbutton.addEventListener('click',function() {
        makeQuestion(counter);
      });
    }
  }

  //win function
  // function getWinner() {
  //  //if the loop has run 10 times & player points in 27, then print its a match
  //   if (player.points === 18){
  //     //winner is printed in the the result box
  //     document.querySelector('#lovemeter').innerHTML = 'It\'s a match!';
  //     //remove event listener
  //   }
  //   else if (player.points !== 18){
  //     //winner is printed in the the result box
  //     document.querySelector('#lovemeter').innerHTML = 'You\'re barking up the wrong tree';
  //     //remove event listener
  //   }
  // };
//reset function
  //grab the reset button
  let resetButton = document.querySelector('#reset');
  //when the button is clicked, reset game
  if(resetButton){
  resetButton.addEventListener('click', reset);
  function reset() {
    location.reload();
  }
  };

}

