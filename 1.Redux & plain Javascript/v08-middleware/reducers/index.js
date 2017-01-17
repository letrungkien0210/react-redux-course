// step 2.2

//Root reducer
      function combineReducer(currentState, action) { // REDUCER
        var nextState = Object.assign({}, currentState);

        nextState = {
          count: count(nextState.count, action),
          sum: sum(nextState.sum, action)
        }

        return nextState;
      }
      // ~end step 2.2