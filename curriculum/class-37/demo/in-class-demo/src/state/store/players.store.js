
const initialState = [
  {_id:77,name:'Kenny Rogers', position:'Gambler'}
];

// Reducer
export default (state=initialState, action) => {
  // { type: 'SOMETHING', payload: ... }
  const {payload, type} = action;

  switch(type) {
    case 'ADD':
      return [...state, payload];
    default:
      return state;
  }

}

// Action Creator Function
export const add = (playerObject) => {
  return {
    type: 'ADD',
    payload: playerObject
  }
};
