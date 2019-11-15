const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // add payload

      // also works: but mutates the state :(
      // return state.push(action.payload)

      return [...state, { ...action.payload }];

    default:
      return state;
  }
};

export default reducer;
