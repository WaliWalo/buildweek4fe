//value = user?
//export function search(value) {
export default function (state = {}, action) {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
}
