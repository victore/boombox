import * as actionTypes from '../constants/actionTypes';

const initialState = [];

// We export an anonymous function, the reducer, as an interface to our existing app.
// The reducer gets a state and action.
// We define an empty array as initial state.

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
}