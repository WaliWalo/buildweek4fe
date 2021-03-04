/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TO_MESSAGES":
      return action.payload;
    case "ADD_ONE_TO_MESSAGES":
      const filter = state.filter(
        (message) => message._id === action.payload._id
      );
      if (filter.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
}
