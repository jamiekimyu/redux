import {SET_LYRICS} from '../constants';

const initialState = {text: ''};

export default function (prevState = initialState, action) {
    switch(action.type){
        case SET_LYRICS:
            // return Object.assign({}, prevState, {text: action.lyric});
            return action.lyric
            // break; not needed since there was return
        default:
            return prevState;
    }
}
