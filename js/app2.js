window.onload = function() {
  console.log('Love meter activated!');

  let player = {
    name: [],
    points: 0,
  }
  // let currentIndex = 0;
  let counter = 0;
  let dogCounter = 0;

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
    {ask: 'What do you like to do on the weekends?',
      answers: [
      { word: 'ride bikes',
        points: 3,
      },
      { word: 'roll in the grass',
        points: 2,
      },
      { word: 'go for a walk',
        points: 1,
      },
      { word: 'every day is the weekened!',
        points: 0,
      },
      ]
    },
  ]
let dogResponses = ['Are you having a ruff day,', 'Ummm...sure OK,', 'Ex-squeeze me,', 'What dat again,']

const $responsebox = $('#responsebox');
const $playButton = $('#submit');
const $homepage = $('#homepage');
const $gamepage = $('#gamepage');


  //when button is clicked, start game
  if($playButton){
  $playButton.submit(start);

    function start(event) {
      event.preventDefault();
      //hide home page and show game page
      $homepage.css('visibility', 'hidden');
      $gamepage.css('visibility', 'visible');
      //grab user input name and store it in the object
      let $enteredName = $('#input').val();
      player.name.push($enteredName);
      //call the makeQuestion function at the counter
      makeQuestion(counter);
    }
  };

  //loop through the questions for user to select answer
  function makeQuestion() {
    const $questionbox = $('#questionbox');
    const $responsebox = $('#responsebox');
    $responsebox.css('visibility','hidden');
    $questionbox.css('visibility','visible');
    // loop through all of the questions
      let $questionask = $('#question');
      //print the current question
      $questionask.html(questions[counter].ask);
      //loop through all of the answers
      for (let j=0; j < questions[counter].answers.length; j++){
        let $answer = $('.answer');
        //print the current answer
        $answer[j].append(questions[counter].answers[j].word);
      }
    }
    makeHearts();


  function makeHearts(){
    for (let i=0; i < questions[counter].answers.length; i++){
      let $answer = $('.answer');
        //grab the current points
        $answer[i].points = questions[counter].answers[i].points;
        //store the points in a variable
        let nodePoints = $answer[i].points;
        //add event listener
        $answer[i].click(function(){
          //stores points - by giving player.points a value and adding
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
          counter++;
          console.log(counter);
          $('#hearts').html(hearts);
          dogTalk();
          getWinner();
        });
    }
  }

  //make dog respond
  function dogTalk() {
    const $questionbox = $('#questionbox');
    const $responsebox = $('#responsebox');
    const $response = $('#response');
    const $nextbutton = $('#next');
    //hide question box and show response box
    $responsebox.css('visibility','visible');
    $questionbox.css('visibility','hidden');
    $response.html(dogResponses[dogCounter] + ' ' + player.name);
    dogCounter++;

    if ($nextbutton) {
      $nextbutton.click(function() {
        makeQuestion(counter);
      });
    }
  }

  function getWinner() {
    const $nextButton = $('#next')
    const $lovemeter = $('#lovemeter')
    const $winnerbox = $('#winnerbox')
    //if the loop has run 10 times & player points in 27, then print its a match
    if ((player.points >= 6) && (counter === 4)){
      //winner is printed in the the result box
      $winnerbox.html('It\'s official: Scout and ' + player.name + ' are in love!');
      //toggle off next button
      $nextButton.css('visibility','hidden');
      $responsebox.css('visibility','hidden');
      $lovemeter.css('visibility','hidden');
      $winnerbox.css('visibility','visible');
    }
    else if ((player.points <= 6) && (counter === 4)){
      //winner is printed in the the result box
      $winnerbox.html('You\'re barking up the wrong tree! Get outta here ' + player.name + '!');
      //toggle off next button
      $nextButton.css('visibility','hidden');
      $responsebox.css('visibility','hidden');
      $lovemeter.css('visibility','hidden');
      $winnerbox.css('visibility','visible');
    }
  }

  //reset function
  //grab the reset button
  let $resetButton = $('#reset');
  //when the button is clicked, reset game
  if($resetButton) {
    $resetButton.click(reset);
    function reset() {
      location.reload();
  }
  };

}

