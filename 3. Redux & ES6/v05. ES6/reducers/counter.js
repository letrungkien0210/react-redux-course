//sub-reducer
var count = (state = {result:0, loading:false}, action)=>{
  
  switch(action.type){
    case 'DECREMENT': // look at Note2.1
      return Object.assign({}, state, {result: state.result-1});
    case 'INCREMENT': // look at Note2.1
      return Object.assign({}, state, {result: state.result + 1, loading: false});
    case 'INCREMENT_LOADING': // look at Note2.1
      return Object.assign({}, state, {loading: true});
    default:
      return state;
    }
};