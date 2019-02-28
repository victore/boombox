import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

/* We are using the returned function of connect to take our Stream component as argument to return a higher order component.
The higher order component is able to access the Redux store while the Stream component itself is only presenting our data. */


// The connect function takes as first argument a mapStateToProps function which returns an object.
// The object is a substate of our global state.
// In mapStateToProps we are only exposing the substate of the global state which is required by the component.
export default connect(mapStateToProps)(Stream);

//export default Stream;