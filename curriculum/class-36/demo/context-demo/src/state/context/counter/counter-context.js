import React, {useReducer} from 'react';

export const CounterContext = React.createContext();


function SettingsProvider(props) {

  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const increment = () => {
    dispatch({type:'INCREMENT'})
  };

  const decrement = () => {
    dispatch({type:'DECREMENT'})
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const values = {...state, increment, decrement};

    return (
      <CounterContext.Provider value={values}>
        {props.children}
      </CounterContext.Provider>
    );
}

export default SettingsProvider;
