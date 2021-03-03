/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "ADD_TO_CONVERSATIONS":
      console.log(action);
      return action.payload;

    default:
      return state;
  }
}
