//middleware
const logger = (store) =>
  (next) =>
    (action) => {
      console.group('logger')
      console.log('currentState == ', store.getState())
      console.log('next(action) // action == ', action)
      next(action);
      console.log('nextState == ', store.getState());
      console.groupEnd('logger')
    }

//second middleware
const crashReporter = function(store){
  return function(next){
    return function(action){
      try{
        next(action);
      }catch(err){
        console.group('crashreporter');
        console.error('error happen with action == ', action);
        console.error(err)
        console.groupEnd('crashreporter');
      }
    }
  }
}

//thrid middleware
const thunk = function(store){
  return function(next){
    return function(action){
      if(typeof action === 'function'){
        action(store.dispatch, store.getState());
      }else{
        next(action);
      }
    }
  }
}