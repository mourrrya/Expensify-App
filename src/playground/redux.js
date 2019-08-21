import { createStore } from "redux";

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + action.incrementBy
      };
    case "DEC":
      return {
        count: state.count - 1
      };
    case "reset":
      return {
        count: 0
      };
    default:
      return state;
  }
};

let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
});

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INC",
  incrementBy
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch({
  type: "reset"
});
store.dispatch({
  type: "DEC"
});
