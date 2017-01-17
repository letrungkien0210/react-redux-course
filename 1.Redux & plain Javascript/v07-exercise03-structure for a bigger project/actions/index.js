function decrease(){
	return {type: 'DECREMENT'};// Note 2.1
}
function increment(){
	return {type: 'INCREMENT'};
}
function getSum(a, b){
	return { type: 'SUM', a: a, b: b};
}