import { FETCH_POST, FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action){
  switch(action.type) {
    case FETCH_POST:
      return {...state, post: action.payload.data};
      
    case FETCH_POSTS:
      // remember never modify state just append to it.
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}
