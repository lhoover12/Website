// Actions
const FETCH_SOMTHING = "somthing/FETCH_SOMTHING";
// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SOMTHING:
      return {
        ...state
      };
    default:
      return state;
  }
}

// Intermediate action creators and helpers
function fetchSomething() {
  return {
    type: FETCH_SOMTHING
  };
}

// Action creators
export const Something = () => dispatch => {
  dispatch(fetchSomething());
};
