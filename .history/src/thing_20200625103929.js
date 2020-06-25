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
const feed = changeState("soil");
const blueFood = changeState("soil")(5);

// $(document).ready(function() {

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
//   $('#feed').click(function() {
//     const newState = stateChanger(blueFood);
//     $('#soil-value').text(newState.soil);
//   });
// });