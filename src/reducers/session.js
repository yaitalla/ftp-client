const INITIAL_STATE = {
  token: ''
};

const applyState = (state, action) => ({
  ...state,
  pchoice: action.payload.token,
});

function sessionReducer(state = INITIAL_STATE, action) {
//  console.log(action.payload)
  switch (action.type) {
    case 'LOGIN': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default sessionReducer;
