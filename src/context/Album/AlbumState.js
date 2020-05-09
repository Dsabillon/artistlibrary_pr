import React, { useReducer } from "react";

import AlbumContext from "./AlbumContext";
import AlbumReducer from "./AlbumReducer";
import { GET_ARTIST, ADD_ALBUM, VALIDATE_FORM } from "../../types";

const AlbumState = (props) => {
  const initialState = {
    albums: [],
    errorform: false,
    selectedartist: null,
  };

  const [state, dispatch] = useReducer(AlbumReducer, initialState);

  //-----METHODS-----//
  const addAlbum = (album) => {
    dispatch({
      type: ADD_ALBUM,
      payload: album,
    });
  };

  const setError = (error) => {
    dispatch({
      type: VALIDATE_FORM,
      payload: error,
    });
  };

  const getArtist = (id) => {
    dispatch({
      type: GET_ARTIST,
      payload: id,
    });
  };

  return (
    <AlbumContext.Provider
      value={{
        selectedartist: state.selectedartist,
        albums: state.albums,
        errorform: state.errorform,
        addAlbum,
        setError,
        getArtist,
      }}
    >
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumState;
