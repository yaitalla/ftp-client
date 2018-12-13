const INITIAL_STATE = {
  choice: ''
};

const applyState = (state, action) => ({
  ...state,
  choice: action.payload.choice
});

function computerReducer(state = INITIAL_STATE, action) {
//  console.log(action.type)
  switch (action.type) {
    case 'COMPUTER_CHOICE': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default computerReducer;
