import { FETCH_DATA } from '../actions/index';

const INITIAL_STATE = { item:[] };

export default function(state = INITIAL_STATE, action) {
    console.log('state: ', state);
    console.log('inside reducer')
    console.log('action type', action.type)
    console.log('action payload', action.payload)
    switch(action.type) {
    case FETCH_DATA:
        console.log('case 1')
        return { ...state, item: action.payload.items }

    default:
        return state
    }
}