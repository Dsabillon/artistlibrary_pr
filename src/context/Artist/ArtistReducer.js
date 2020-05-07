import { ADD_ARTIST, VALIDATE_FORM } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ARTIST:
      return {
        ...state,
        artists: [action.payload, ...state.artists],
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
