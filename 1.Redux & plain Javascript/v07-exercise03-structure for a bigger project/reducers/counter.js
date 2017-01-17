//sub-reducer
function count(currentState, action){
  var DEFAULT_STATE = 0;
  if(currentState === undefined){ // look at Note 1.1
    nextState = DEFAULT_STATE; // Note 1.2
    return nextState;
  }

  switch(action.type){
    case 'DECREMENT': // look at Note 2.1
      nextState = currentState - 1;
      return nextState; // Note 2.2
    case 'INCREMENT':
      nextState = currentState + 1;
      return nextState;
    default:
      return nextState;
    }
}