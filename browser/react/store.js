import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
// import reducer from './reducers/root-reducer';
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

// reducers
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';


const rootReducer = combineReducers({
  lyrics: lyricsReducer,
  player: playerReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)
//   ));

export default createStore(rootReducer,
composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware))
);

