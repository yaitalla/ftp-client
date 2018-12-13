export const playerChoice = choice => ({
  type: 'PLAYER_CHOICE',
  payload: { choice }
});

export const computerChoice = choice => ({
  type: 'COMPUTER_CHOICE',
  payload: { choice }
});

export const setScore = (pchoice, cchoice, score) => ({
  type: 'SET_SCORE',
  payload: {
    pchoice ,
    cchoice,
    score 
  }
})

let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
