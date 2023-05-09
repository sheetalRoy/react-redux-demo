import { legacy_createStore  as createStore } from 'redux';

const initState = {
    counter: 0
}
// Reducer example
// const reducerFn = (state = { counter:1}, action) => {
//     return state;
// }
const reducercount = (state = initState, action) => {
    console.log(state)
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
        }
    }
    return state;
}
const store = createStore(reducercount)

export default store;