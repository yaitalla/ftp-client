export const playerChoice = choice => ({
  type: 'PLAYER_CHOICE',
  payload: { choice }
});

export const computerChoice = choice => ({
  type: 'COMPUTER_CHOICE',
  payload: { choice }
});

export const setScore = (playerChoice, computerChoice) => ({
  type: 'SET_SCORE',
  playerChoice,
  computerChoice
})
