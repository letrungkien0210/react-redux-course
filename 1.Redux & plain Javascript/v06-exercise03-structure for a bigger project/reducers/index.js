// step 2.2
//sub-reducer
function count(currentState, action){
  var DEFAULT_STATE = 0;
  var nextState = "?";
  return nextState;
}
//sub-reducer
function sum(currentState, action){
  var DEFAULT_STATE = 0;
  var nextState = "??";
  return nextState;
}

//Root reducer
      function combineReducer(currentState, action) { // REDUCER
        var DEFAULT_STATE = {count:0, sum: 3};
        var nextState = Object.assign({}, currentState);

        nextState = {
          count: count(nextState.count, action),
          sum: sum(nextState.sum, action)
        }

        return nextState;
        // if(currentState === undefined){ // look at Note 1.1
        //   nextState = DEFAULT_STATE; // Note 1.2
        //   return nextState;
        // }

        // switch(action.type){
        //   case 'DECREMENT': // look at Note 2.1
        //     nextState.count = currentState.count - 1;
        //     return nextState; // Note 2.2
        //   case 'INCREMENT':
        //     nextState.count = currentState.count + 1;
        //     return nextState;
        //   case 'SUM':
        //     nextState.sum = parseInt(action.a) + parseInt(action.b);
        //     return nextState;
        //   default:
        //     return nextState;
        // }
      }
      // ~end step 2.2