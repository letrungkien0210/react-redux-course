// step 1.2
      var store = Redux.createStore(combineReducer);
      // ~end step 1.2
      // step 1.3
      var valueEl = document.getElementById('value');
      function render() {
        valueEl.innerHTML = store.getState().count;
        document.getElementById("value2").innerHTML= store.getState().sum;
      }
      render();
      store.subscribe(render);
      // ~end step 1.3
      