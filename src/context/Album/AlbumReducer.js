import {
  GET_DEFAULT_ARTIST,
  GET_ARTIST_ALBUM,
  ADD_ALBUM,
  VALIDATE_FORM,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      console.log(action.payload);
      return {
        ...state,
        albums: [action.payload, ...state.albums],
        selectedAlbums: [action.payload, ...state.albums].filter(
          (album) => album.artist_creator === state.selectedartist
        ),
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorform: action.payload,
      };
    case GET_DEFAULT_ARTIST:
      console.log("getting a default artist selected when submit");
      return {
        ...state,
        selectedartist: action.payload,
        selectedAlbums: [],
      };
    case GET_ARTIST_ALBUM:
      console.log(action.payload, state.album, "getselectedalbums");
      return {
        ...state,
        selectedartist: action.payload,
        selectedAlbums: state.albums.filter(
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
