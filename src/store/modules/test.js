import { Object } from "core-js";
import { combineReducers } from 'redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function incrementCounter(amount) {
    return { type: INCREMENT, amount };
}

export function decrementCounter(amount) {
    return { type: DECREMENT, amount };
}

const initialState = {
    counter: 0
}

// function counterApp(state = initialState, action) {
//     return {
//         counters: counters(state.counter, action)
//     }
// }


function counters(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                counter: state.counter + action.amount
            })
        case DECREMENT:
            return Object.assign({}, state, {
                counter: state.counter - action.amount
            })
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counters
});

export default counterApp;