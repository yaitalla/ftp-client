const INITIAL_STATE = {
  choice: ''
};

const applyState = (state, action) => ({
  ...state,
  choice: action.choice
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
