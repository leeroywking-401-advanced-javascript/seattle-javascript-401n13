import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v4';
import Form from "react-jsonschema-form";

import {connect} from 'react-redux';

import * as actions from '../state/store/players.store.js';

const schemaURL = 'https://api-js401.herokuapp.com/api/v1/players/schema';

const uiSchema = {
  _id: { 'ui:widget': 'hidden' },
  __v: { 'ui:widget': 'hidden' }
}

function PlayerForm(props) {

  const [schema, setSchema] = useState({});

  const _addPlayer = (form) => {
    console.log(form);
    form.formData._id = uuid();
    props.addPlayer(form.formData);
  };

  useEffect( () => {
    fetch( schemaURL )
     .then(results => results.json() )
     .then(schemaObject => setSchema(schemaObject))
  }, []); // [] as a second param means only do this ONCE

  console.log(schema);

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={_addPlayer}
      />
  )
}

const mapDispatchToProps = (dispatch, getState) => ({
  addPlayer: (playerObject) => dispatch(actions.add(playerObject))
});


export default connect(undefined, mapDispatchToProps)(PlayerForm);
