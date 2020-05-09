import { ADD_SONG, VALIDATE_FORM } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload, ...state.songs],
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorform: action.payload,
      };

    default:
      return state;
  }
};
