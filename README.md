

![Date a Dog](/assets/dateadoggame.png "Date a Dog")

# Date a Dog ###

Ever see a dog on the street and want to take it home? Now you can! Go on a date with Scout the dog. She'll ask you classic first date questions and give you four choices to respond. There's no such thing as a wrong answer on a date, but as you know, it may not always work out. Points are based on her whims, so try your best to woo her. 

[Play The Game](https://git.generalassemb.ly/pages/aileenmwong/project-1/)

### Technologies Used ###

- HTML5
- CSS3
- Vanilla Javascript
- jQuery

### About the Build ###

**HTML5** - I initially built separate pages for each individual page, the home page, the game page, and the win page, but then I started to run into issues with the having all three pages run on on Javascript file, so instead I stacked the home page and game page in separate divs and toggled their visibility based on click events. I then consolidated my win and gamepage to prevent adding a third page.

It was actually really good that I learned how to toggle visibility because I was able to learn how to toggle my "conversations" on and off and use that same technique. 

**CSS3** - I was able to implement some simple CSS animation in the game, such as the drop down title on the home page, and the bobbing head on the second page. I took the same logic that we used in our planets exercise to execute bob of the head.

**Javascript** - I wrote the code in Vanilla Javascript, as it was the easiest way for me to implement, as I knew that this would be the trickiest part of the game. I then refactored my code into jQuery. I wrapped all of the questions into a very large object literal and was able to continuously feel each question and answer into a function. The trickiest part for me was figuring out how to turn the points into actual hearts that appear in the lovemeter, which is shown below in code. 

##### Example Code ###

```
function makeHearts(){
    //loop through the answers to add a click event
    for (let i=0; i < questions[counter].answers.length; i++){
      let answer = document.querySelectorAll('.answer');
        answer[i].points = questions[counter].answers[i].points;
        let nodePoints = answer[i].points;
        answer[i].addEventListener('click', function lovemeter(){
        //turn points into hearts
          player.points += nodePoints;
          let score = player.points;
          let hearts = ' ';
          for (let n=0; n < score; n++) {
            hearts += '&hearts;'
            }
```

### Build Strategy ###

I knew I wanted to a do a dog themed choose your own adventure game, but it ended up evolving into a dating game. I started out thinking about the dog's personality and what makes games that seem to have no point fun, and it's generally about the content that goes into it. After I had a solid idea of what the dog's personality would be like, I started to sketch out wireframes and chose pictures to work with. I made the art in Photoshop with photos of my sister's dog and started building out the game with HTML5, CSS3 and Vanilla Javascript. 

### Future Improvements ###
I would like to add more dogs with different personalities to my game. I would like for the player to be able to choose which dog they want to go on a date with. 

I want the game to resize in mobile. I would also like to add sound effects and music to the game. I want to figure out how to trigger a CSS animation based on a click as well. Right now the different animations change appearance based on toggling visbility. 

### Issues to solve ###
Since I wrote my code in Vanilla Javascript, I later refactored it to jQuery when it was complete. For some reason, my code was not able to access the jQuery library when it was inside of a loop, but would work outside of the loop. I worked with a TA for a long time and he was unable to figure it out as well, so there are still two lines of Vanilla JS in the jQuery file.

### Wireframes ### 

#### Start Game ###
![Date a Dog](/assets/landing-page.png "Start Date a Dog")

#### User State ###
![Date a Dog](/assets/user-answer-page.png "Play Date a Dog")

#### Dog State ###
![Date a Dog](/assets/dog-response-page.png "Dog Response Date a Dog")

#### Win Game ###
![Date a Dog](/assets/win-state.png "Win Date a Dog")

#### Author ###
Aileen Wong
