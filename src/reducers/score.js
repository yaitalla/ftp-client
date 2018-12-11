const INITIAL_STATE = {
  playerChoice: '',
  computerChoice: '',
  score: [],
  scoreMsg: ''
};

const applyState = (state, action) => ({
  ...state,
  playerChoice: action.playerChoice,
  computerChoice: action.computerChoice,
  score: action.score,
  scoreMsg: action.scoreMsg
});

function scoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_SCORE': {
      return applyState(state, action);
    }
    default: return state;
  }
}

export default scoreReducer;
