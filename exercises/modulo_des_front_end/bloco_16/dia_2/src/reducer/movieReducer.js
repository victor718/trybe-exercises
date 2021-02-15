import category from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...category],
};

function movieReducer(state = INITIAL_STATE, action) {
  const { payload } = action;
  if (action.type === 'SELECT_MOVIE') {
    return {
      selectedCategory: payload.category,
      selectedMovie: payload.movie,
      ...state,
    };
  }
  return state;
}

export default movieReducer;
