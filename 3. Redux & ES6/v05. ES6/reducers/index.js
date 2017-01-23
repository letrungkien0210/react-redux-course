// step 2.2

//Root reducer
var combineReducer = (currentState, action) => {// REDUCER
  var nextState = Object.assign({}, currentState);

  nextState = {
    count: count(nextState.count, action),
    sum: sum(nextState.sum, action),
    images: images(nextState.images, action)
  }

  return nextState;
}
// ~end step 2.2