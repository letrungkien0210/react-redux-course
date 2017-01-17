//sub-reducer
function sum(currentState, action){
  var DEFAULT_STATE = 0;
  if(currentState === undefined){ // look at Note 1.1
    nextState = DEFAULT_STATE; // Note 1.2
    return nextState;
  }

  switch(action.type){
    case 'SUM':
      nextState = parseInt(action.a) + parseInt(action.b);
      return nextState;
    default:
      return nextState;
    }
}