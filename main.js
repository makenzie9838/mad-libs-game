const storyOne = {
    adj1: '',
    person: '',
    place: '',
    clothing: '',
    adj2: '',
    adj3: '',
    adj4: '',
    adj5: '',
    song: '',
    pastTenseVerb1: '',
    noun1: '',
    noun2: '',
    pastTenseVerb2: '',
    pastTenseVerb3: '',
    noun3: '',
    noun4: '',
    verb1: '',
    verb2: '',
    verb3: '', 
    adj6: '',
      }
  
  const storyTwo = {
    noun1 : '',
    noun2 : '',
    posAdj : '',
    negAdj : '',
    pastVerb : '',
    verb1 : '',
    noun3 : '',
    noun4 : '',
    verb2 : '',
  }
  
  function startGame() {
    let input = confirm(`Would you like to play Mad-Libs?`);
    if (input === true) {
      alert(`Nice! Let's get creative!`);
      pickStory(input);
    } else {
      alert(`That's okay, maybe next time!`)
    }
  };
  
  function pickStory(input) {
    if (input === true) {
      let storySelect = prompt(`Select either Story 1 or Story 2?`)
      if (storySelect == 1) {
        alert(`You have selected Story 1! Enjoy!`)
        return playOne();
      } else if (storySelect == 2) {
        alert(`You have selected Story 2! Enjoy!`)
        return playTwo();
      } else {
        input = confirm(`I don't recognize that input, did you want to keep playing?`)
        if (input === false) {
          alert(`Okay, thanks for playing!`)
          return;
        } return pickStory(input);
      }
    }
  };
  
  function playOne() {
    alert(`Let's start by typing in some nouns, objects, and whatnots! Have fun!`)
  //add storyOne prompts to add storyOne key-value properteries
    storyOne.adj1 = prompt("Please input an adjective");
    storyOne.person = prompt("Please input a name of a person");
    storyOne.place = prompt("Please input a name of a place");
    storyOne.clothing = prompt("Please input an article of clothing");
    storyOne.adj2 = prompt("Please input an adjective");
    storyOne.adj3 = prompt("Please input an adjective");
    storyOne.adj4 = prompt("Please input an adjective");
    storyOne.adj5 = prompt("Please input an adjective");
    storyOne.song = prompt("Please input the name of a song");
    storyOne.pastTenseVerb1 = prompt("Please input a verb in the past tense");
    storyOne.noun1 = prompt("Please input a noun");
    storyOne.noun2 = prompt("Please input a noun");
    storyOne.pastTenseVerb2 = prompt("Please input a verb in the past tense");
    storyOne.pastTenseVerb3 = prompt("Please input a verb in the past tense");
    storyOne.noun3 = prompt("Please input a noun");
    storyOne.noun4 = prompt("Please input a noun");
    storyOne.verb1 = prompt("Please input a verb");
    storyOne.verb2 = prompt("Please input a verb");
    storyOne.verb3 = prompt("Please input a verb");
    storyOne.adj6 = prompt("Please input an adjective");
    return startOne(storyOne);
  };
  
  function playTwo() {
    alert(`Let's start by typing in some nouns, objects, and whatnots! Have fun!`)
  //add storyTwo prompts to add storyTwo key-value properteries
    storyTwo.noun1 = prompt("Please input a noun");
    storyTwo.noun2 = prompt("Please input a noun");
    storyTwo.posAdj = prompt("Please input a positive adjective");
    storyTwo.negAdj = prompt("Please input a negative adjective");
    storyTwo.pastVerb = prompt("Please input a past tense verb");
    storyTwo.verb1 = prompt("Please input a verb");
    storyTwo.noun3 = prompt("Please input a noun");
    storyTwo.noun4 = prompt("Please input a noun");
    storyTwo.verb2 = prompt("Please input a verb");
    return startTwo(storyTwo);
  };
  
  function startOne(obj) {
    alert(`It was a ${storyOne.adj1} summer day. ${storyOne.person} and I were excited to go camping at ${storyOne.place}. It was my first time going there. I packed my favorite ${storyOne.clothing}. It is ${storyOne.adj2} and ${storyOne.adj3}. Perfect for camping! On the road we went in our ${storyOne.adj4} ${storyOne.adj5} van! We were listening to ${storyOne.song} all the way down. The drive was about 5 hours but it was so worth it. When we got there, we unpacked the van. I ${storyOne.pastTenseVerb1} to the room I was staying in with my ${storyOne.noun1}. The next thing I knew, ${storyOne.noun2} came and ${storyOne.pastTenseVerb2} ${storyOne.pastTenseVerb3} outside. I saw ${storyOne.noun3}. It was ${storyOne.noun4}. Over the next few days I got to ${storyOne.verb1}, ${storyOne.verb2}, and ${storyOne.verb3}. My camping trip was ${storyOne.adj6}.`);
     return startGame()
  }
  
  function startTwo(obj){
    alert(`We had run out of ${storyTwo.noun1} so I had to go down to the local ${storyTwo.noun2} to buy more of it. On the way I met my ${storyTwo.posAdj} neighbor and their ${storyTwo.negAdj} spouse. They ${storyTwo.pastVerb} for so long I thought I was just going to ${storyTwo.verb1} right there on the spot. They both finally left my ${storyTwo.noun3} and I could go back to my task. When I finally arrived at my destination, they were all out of what I needed so I bought ${storyTwo.noun4} instead. Turn out making substitutions in a recipe was a bad idea and my entire family round up very ${storyTwo.verb2}.`);
    return startGame()
  }
  
  startGame();