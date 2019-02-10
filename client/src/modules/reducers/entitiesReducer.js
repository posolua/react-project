const entityReducer = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    const newState = { ...state };

    Object.keys(action.payload.entities).forEach(entitieKey => {
      newState[entitieKey] = {
        ...state[entitieKey],
        ...action.payload.entities[entitieKey],
      };
    });

    return newState;
  }

  return state;
};

export default entityReducer;
