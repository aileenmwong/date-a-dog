# Date a Dog ###

![Date a Dog](/assets/dateadoggame.png "Date a Dog")

Wouldn't you ever like to date a dog? 

##### Technologies Used ###

- HTML5
- CSS3
- Vanilla Javascript

##### Example Code ###

```
function makeHearts(){
    for (let i=0; i < questions[counter].answers.length; i++){
      let answer = document.querySelectorAll('.answer');
        answer[i].points = questions[counter].answers[i].points;
        let nodePoints = answer[i].points;
        answer[i].addEventListener('click', function lovemeter(){
          player.points += nodePoints;
          console.log(player.points);
          let score = player.points;
          let hearts = ' ';
          for (let n=0; n < score; n++) {
            hearts += '&hearts;'
            }
```

#### Build Strategy ###

I started planning out my game using sketches. Then I worked out my game strategy using psuedocode. I knew that the game logic would be the hardest part of the game. I had to think about the board as an array and that got me moving through my game.

#### Future Improvements ###
I would like to add more dogs with different personalities to my game. I would like for the player to be able to choose which dog they want to go on a date with. 

#### Start Game ###
![Date a Dog](/assets/landing-page.png "Start Date a Dog")

#### User State ###
![Date a Dog](/assets/user-answer-page.png "Play Date a Dog")

#### Dog State ###
![Date a Dog](/assets/dog-response-page.png "Dog Response Date a Dog")

#### Win Game ###
![Date a Dog](/assets/win-state.png "Win Date a Dog")
