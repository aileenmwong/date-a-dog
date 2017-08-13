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
    {ask: 'Why are you single',
      answers: [
        { word: 'I\'m not, I\'m just here to get a dog!',
          points: 0,
        },
        { word: 'Testing the waters',
          points: 1,
        },
        { word: 'I live with my mom',
          points: 2,
        },
        { word: '*Hangs head in shame*',
          points: 3,
        }
        ],
    },
    {ask: 'What is your favorite snack?',
      answers: [
      { word: 'bacon',
        points: 3,
      },
      { word: 'peanuts',
        points: 1,
      },
      { word: 'popcorn',
        points: 2,
      },
      { word: 'carrots',
        points: 0,
      },
      ]
    },
    {ask: 'What is your favorite hobby?',
      answers: [
      { word: 'running',
        points: 0,
      },
      { word: 'sleeping',
        points: 3,
      },
      { word: 'snacking',
        points: 2,
      },
      { word: 'farting',
        points: 1,
      },
      ]
    },
    {ask: 'What do you like to do on the weekends?',
      answers: [
      { word: 'Eat shoes',
        points: 1,
      },
      { word: 'Roll in the grass',
        points: 2,
      },
      { word: 'Go for a walk',
        points: 3,
      },
      { word: 'Every day is the weekend!',
        points: 0,
      },
      ]
    },
    {ask: 'Can you fight a bear?',
      answers: [
      { word: 'How strong do you think I am?',
        points: 0,
      },
      { word: 'Obviously.',
        points: 2,
      },
      { word: 'No way.',
        points: 1,
      },
      { word: 'You should see the bear.',
        points: 3,
      },
      ]
    },
    {ask: 'How many siblings do you have',
      answers: [
      { word: 'None',
        points: 3,
      },
      { word: 'One',
        points: 2,
      },
      { word: 'Two',
        points: 1,
      },
      { word: 'A whole litter',
        points: 0,
      },
      ]
    },
    {ask: 'What is your idea of the perfect date?',
      answers: [
      { word: 'April 25th.',
        points: 3,
      },
      { word: 'A long walk on the beach.',
        points: 0,
      },
      { word: 'Snuggling on the couch.',
        points: 1,
      },
      { word: 'A long belly rub.',
        points: 2,
      },
      ]
    },
    {ask: 'What would you take with you on a desert island',
      answers: [
      { word: 'A good stick.',
        points: 3,
      },
      { word: 'A long book.',
        points: 0,
      },
      { word: 'A plane.',
        points: 2,
      },
      { word: 'A tennis ball.',
        points: 1,
      },
      ]
    },
     {ask: 'What is the worst pick up line you have ever heard?',
      answers: [
      { word: 'I came here looking for a little tail.',
        points: 3,
      },
      { word: 'Is your tail wagging or are you just happy to see me?',
        points: 2,
      },
      { word: 'Your doghouse or mine?',
        points: 1,
      },
      { word: 'You had me a ruff.',
        points: 0,
      },
      ]
    },
    {ask: 'What are you looking for in a dog?',
      answers: [
      { word: 'A companion I can bring to work.',
        points: 0,
      },
      { word: 'Someone who will eat my leftovers',
        points: 1,
      },
      { word: 'An animal pal who can see ghosts.',
        points: 3,
      },
      { word: 'Someone who will greet me at the door.',
        points: 2,
      },
      ]
    },
  ]
let dogResponses = ['Are you having a ruff day,', 'Bone Appetit,', 'Ummm...sure OK,', 'What dat again,', 'Don\'t terrior yourself up about it,', 'That\'s im-paw-sible,', 'Purrrfect,', 'Ex-squeeze me,', 'If I toss a stick, will you go away?', 'Doggone it,']

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
    if ((player.points >= 20) && (counter === 10)){
      //winner is printed in the the result box
      $winnerbox.html('It\'s official: Scout and ' + player.name + ' are in love!');
      //toggle off next button
      $nextButton.css('visibility','hidden');
      $responsebox.css('visibility','hidden');
      $lovemeter.css('visibility','hidden');
      $winnerbox.css('visibility','visible');
    }
    else if ((player.points <= 20) && (counter === 10)){
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

