const Logger = (state) => (next) => (action) => {
  console.log("Before: ", state.getState());
  console.log("Action: ", action);
  next(action);
  console.log("After: ", state.getState());
};
export default Logger;
