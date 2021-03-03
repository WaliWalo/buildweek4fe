/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
  switch (action.type) {
    case "SET_SELECTEDCONVO":
      return action.payload;

    case "UNSET_SELECTEDCONVO":
      return null;

    default:
      return state;
  }
}
