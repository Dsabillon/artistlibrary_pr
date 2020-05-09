import { GET_SELECTED_ARTIST, ADD_ARTIST, VALIDATE_FORM } from "../../types";

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
    case GET_SELECTED_ARTIST:
      return {
        ...state,
        artist: state.artists.filter((item) => item.id === action.payload),
      };

    default:
      return state;
  }
};
