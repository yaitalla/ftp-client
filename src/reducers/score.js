const INITIAL_STATE = {
  pchoice: '',
  cchoice: '',
  score: [],
  scoreMsg: ''
};

const applyState = (state, action) => ({
  ...state,
  pchoice: action.payload.pchoice,
  cchoice: action.payload.cchoice,
  score: action.payload.score
});

function scoreReducer(state = INITIAL_STATE, action) {
//  console.log(action.payload)
  switch (action.type) {
    case 'SET_SCORE': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default scoreReducer;
