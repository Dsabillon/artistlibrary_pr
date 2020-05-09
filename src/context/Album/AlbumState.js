import React, { useReducer } from "react";

import AlbumContext from "./AlbumContext";
import AlbumReducer from "./AlbumReducer";
import {
  GET_DEFAULT_ARTIST,
  GET_ARTIST_ALBUM,
  ADD_ALBUM,
  VALIDATE_FORM,
} from "../../types";

const AlbumState = (props) => {
  const initialState = {
    albums: [],
    errorform: false,
    selectedartist: null,
    selectedAlbums: [],
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

  //selecciona el artista al momento de submit
  const getsSelectedArtistSubmit = (id) => {
    dispatch({
      type: GET_DEFAULT_ARTIST,
      payload: id,
    });
  };

  const getArtistAlbums = (id) => {
    dispatch({
      type: GET_ARTIST_ALBUM,
      payload: id,
    });
  };

  return (
    <AlbumContext.Provider
      value={{
        selectedAlbums: state.selectedAlbums,
        selectedartist: state.selectedartist,
        albums: state.albums,
        errorform: state.errorform,
        addAlbum,
        setError,
        getArtistAlbums,
        getsSelectedArtistSubmit,
      }}
    >
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumState;
