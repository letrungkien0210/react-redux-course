function decrease(){
	return {type: 'DECREMENT'};// Note 2.1
}
function increment(){
	return {type: 'INCREMENT'};
}
function getSum(a, b){
	return { type: 'SUM', a: a, b: b};
}
// ASYNC
function asyncIncrease(dispatch, state){
	dispatch({type: 'INCREMENT_LOADING'});
    _fakeServerApi.increaseCount(state.count.result,
        function(data){
            dispatch({ type: 'INCREMENT' });
        }
    );
}