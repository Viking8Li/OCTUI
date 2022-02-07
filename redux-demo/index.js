const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//action returned from a function
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

//reducer
//(prevState, action) => newState

const initialState = {
    numOfCakes:10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}


//store
const store = createStore(reducer)
//get the current state
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
//click dispatch the action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()