const redux = require('redux')

const In_value = { counter : 0 }

const reducer = (store = In_value , action)=>{
    let newstore = store;
    if(action.type=="INCREMENT")
    newstore= {counter:store.counter+1}
    return newstore
}

const store = redux.createStore(reducer);

const subscriber = () => {
   const state = store.getState();
   console.log(state);
}

store.subscribe(subscriber)

store.dispatch({type:'INCREMENT'});