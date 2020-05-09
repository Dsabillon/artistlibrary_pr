import { GET_ARTIST, ADD_ALBUM, VALIDATE_FORM } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return {
        ...state,
        albums: [action.payload, ...state.albums],
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorform: action.payload,
      };
    case GET_ARTIST:
      console.log(action.payload);
      return {
        ...state,
        selectedartist: action.payload,
        albums: state.albums.filter(
          (album) => album.artist_creator === action.payload
        ),
      };

      return {
        ...state,
        selectedartist: action.payload,
      };

    default:
      return state;
  }
};
