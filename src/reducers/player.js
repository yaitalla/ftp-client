const INITIAL_STATE = {
  choice: ''
};

const applyState = (state, action) => ({
  ...state,
  choice: action.payload.choice
});

function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'PLAYER_CHOICE':
      return applyState(state, action);
    default:
      return state;
  }
}

export default playerReducer;
