export default function (state = {}, action) {
  switch (action.type) {
    case "SET_SELECTEDPOST":
      return action.payload;

    case "UNSET_SELECTEDPOST":
      return null;
    case "ADD_LIKE_TO_POST":
      console.log(action);
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case "REMOVE_LIKE_TO_POST":
      return {
        ...state,
        likes: state.likes.filter((user) => user._id !== action.payload._id),
      };

    default:
      return state;
  }
}
