/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TO_ERRORS":
      console.log(action);
      return action.payload;

    case "REMOVE_FROM_ERRORS":
      return {};
    default:
      return state;
  }
}
