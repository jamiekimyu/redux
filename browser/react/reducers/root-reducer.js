import {SET_LYRICS} from '../constants';

const initialState = {text: ''};

export default function reducer (prevState = initialState, action) {
    switch(action.type){
        case 'SET_LYRICS':
            return Object.assign({}, prevState, {text: action.lyric});
            break;
        default:
            return prevState;
    }
}

// testing a change