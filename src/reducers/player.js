const INITIAL_STATE = {
  choice: ''
};

const applyState = (state, action) => ({
  ...state,
  choice: action.playerChoice
});

function playerReducer(state = INITIAL_STATE, action) {
  console.log({action})
  switch (action.type) {
    case 'PLAYER_CHOICE': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default playerReducer;
