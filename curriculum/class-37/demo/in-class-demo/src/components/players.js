import React, {useState} from 'react';

import {connect} from 'react-redux';

import PlayerForm from './player-form.js'

function Players(props) {

  return (
    <>
    <h2>Players Go Here</h2>
      <ul>
        {props.playersList.map((player) =>
          <li key={player._id}>{player.name} / {player.position}</li>
        )}
      </ul>
      <hr />
      <PlayerForm />
    </>
  )
}

const mapStateToProps = (state) => ({
  playersList: state.players
});

export default connect(mapStateToProps)(Players);
