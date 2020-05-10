import {
  GET_ALBUM_SONG,
  GET_DEFAULT_ALBUM,
  ADD_SONG,
  VALIDATE_FORM,
  RESET_SELECTED_SONGS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        songs: [action.payload, ...state.songs],
        selectedsong: [action.payload, ...state.songs].filter(
          (song) => song.self_album === state.selectedalbum
        ),
      };
    case VALIDATE_FORM:
      return {
        ...state,
        errorform: action.payload,
      };
    case GET_DEFAULT_ALBUM:
      return {
        ...state,
        selectedalbum: action.payload,
        selectedsong: [],
      };
    case GET_ALBUM_SONG:
      return {
        ...state,
        selectedalbum: action.payload,
        selectedsong: state.songs.filter(
          (song) => song.self_album === action.payload
        ),
      };
    case RESET_SELECTED_SONGS:
      return {
        ...state,
        selectedsong: [],
      };

    default:
      return state;
  }
};
