import React                            from 'react';
import { List }                         from 'immutable';
import { combineReducers, createStore } from 'redux';



const appState = ( state = appInitialState, action ) => {
  switch ( action.type ) {
    case 'X':
      return state;
    default:
      return state;
  }
}

const AppState = combineReducers({
  appState
});

export const store = createStore( appState,
  window.devToolsExtension ? window.devToolsExtension(): undefined );
