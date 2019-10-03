import React, {useReducer} from 'react';

export const NameContext = React.createContext();


function SettingsProvider(props) {

  const initialState = { name: '' };

  function reducer(state, action) {
    switch (action.type) {
      case 'SET':
        return {name: action.payload};
      case 'UPPER':
        return { name: state.name.toUpperCase() };
      case 'LOWER':
        return { name: state.name.toLowerCase() };
      default:
        return state;
    }
  }

  const set = (newName) => {
    dispatch({type:'SET', payload:newName})
  };

  const uppercase = () => {
    dispatch({type:'UPPER'})
  };

  const lowercase = () => {
    dispatch({type:'LOWER'})
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {...state, uppercase, lowercase, set};

    return (
      <NameContext.Provider value={values}>
        {props.children}
      </NameContext.Provider>
    );
}

export default SettingsProvider;
