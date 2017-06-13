import { COUNT } from '../actions/index';

export default function(state = null, action){
    if(state == undefined){
        state = 0;
    }
    switch(action.type){
        case COUNT:
            state++
            return state;
    }

    return state;
};