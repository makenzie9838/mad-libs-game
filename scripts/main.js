//object to store words
const storyWords = {
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
  adj6: ''
}

//gets reference to output
const storyOutput = document.getElementById('storyOutput');

//gets reference to button
const generateStoryButton = document.querySelector('.generateStory');

//adds an event listener
generateStoryButton.addEventListener('click', function() {
  updateStory();
})

//updates story
function updateStory() {
  //selects all elements with the class of .storyinput
  const inputFields = document.querySelectorAll('.storyinput');
  //selects input elements with an attribute of name and an attribute value of story that is also checked
  const selectedStory = document.querySelector('input[name="story"]:checked').value;

  //dynamically fills out the object with words
  inputFields.forEach(input => {
    const property = input.id;
    const value = input.value
    storyWords[property] = value
  })

  let updatedStory;

  if (selectedStory === '1') {
    updatedStory = `It was a ${storyWords.adj1} summer day. ${storyWords.person} and I were excited to go camping at ${storyWords.place}. 
    It was my first time going there. I packed my favorite ${storyWords.clothing}. It is ${storyWords.adj2} and ${storyWords.adj3}. 
    Perfect for camping! On the road we went in our ${storyWords.adj4} ${storyWords.adj5} van! 
    We were listening to ${storyWords.song} all the way down. The drive was about 5 hours but it was so worth it. 
    When we got there, we unpacked the van. I ${storyWords.pastTenseVerb1} to the room I was staying in with my ${storyWords.noun1}. 
    The next thing I knew, ${storyWords.noun2} came and ${storyWords.pastTenseVerb2} ${storyWords.pastTenseVerb3} outside. 
    I saw ${storyWords.noun3}. It was ${storyWords.noun4}. Over the next few days I got to ${storyWords.verb1}, ${storyWords.verb2}, and ${storyWords.verb3}. 
    My camping trip was ${storyWords.adj6}.`;
  } else if (selectedStory === '2') {
    updatedStory = `It was a ${storyWords.adj1} evening. ${storyWords.person} and I decided to explore ${storyWords.place}. 
    We wore our ${storyWords.clothing}, which was ${storyWords.adj2} and ${storyWords.adj3}. 
    As we walked through the ${storyWords.adj4} ${storyWords.adj5}, we could hear ${storyWords.song} playing in the distance. 
    The atmosphere was ${storyWords.adj6} and filled with excitement. 
    Suddenly, we ${storyWords.pastTenseVerb1} into a ${storyWords.noun1} and decided to ${storyWords.verb1} inside. 
    We discovered a hidden ${storyWords.noun2} and ${storyWords.pastTenseVerb2} it. 
    Outside, ${storyWords.noun3} was ${storyWords.pastTenseVerb3} and it looked ${storyWords.adj6}. 
    We couldn't resist the urge to ${storyWords.verb2} and ${storyWords.verb3} in the ${storyWords.noun4}. 
    It was an unforgettable ${storyWords.adj1} experience.`;
  }

  //displays the story on the page
  storyOutput.textContent = updatedStory;
}
