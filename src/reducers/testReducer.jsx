const initialState = {
  reducer: true
};

const testReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};

export default testReducer;