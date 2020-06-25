//state function
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}
const stateChanger = storeState();

//factory
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

// variables
const feed = changeState("haiku");
const blueFood = changeState("soil")(5);

console.log(blueFood);


// $(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });


// Your logic should verify that the poem has three lines.
// Your logic should verify English syllable rules (and exceptions) one at a time. A quick Google search will provide information on English syllable rules.
// If you successfully complete a Haiku checker, continue to build out your application to randomly generate haikus.

// I am first with five
// Then seven in the middle
// Five again to end.

function isHaiku(poem){
  return poem.length = 3;
}

const testPoem = ["I am first with five", "Then seven in the middle", "Five again to end."];
const haikuTest = isHaiku(testPoem);