const INITIAL_STATE = {
};

const applyState = (state, action) => ({
  ...state,
  choice: action.payload.choice
});

function computerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'COMPUTER_CHOICE': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default computerReducer;
