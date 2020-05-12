import React, { useReducer, useEffect, useContext } from "react";
import {
  GET_ALBUM_SONG,
  GET_DEFAULT_ALBUM,
  ADD_SONG,
  VALIDATE_FORM,
  RESET_SELECTED_SONGS,
  DELETE_SONG,
} from "../../types";

import SongContext from "./SongContext";
import SongReducer from "./SongReducer";
import AlbumContext from "../Album/AlbumContext";

const SongState = (props) => {
  const albumContext = useContext(AlbumContext);
  const { selectedartist } = albumContext;

  const initialState = {
    songs: [],
    errorform: false,
    selectedsong: [],
    selectedalbum: null,
  };

  const [state, dispatch] = useReducer(SongReducer, initialState);

  useEffect(() => {
    //Quita las canciones seleccionadas cuando se cambia de artista
    resetSelectedSongs();
  }, [selectedartist]);

  //-----METHODS-----//
  const resetSelectedSongs = () => {
    dispatch({
      type: RESET_SELECTED_SONGS,
    });
  };

  const addSong = (song) => {
    dispatch({
      type: ADD_SONG,
      payload: song,
    });
  };

  const setError = (error) => {
    dispatch({
      type: VALIDATE_FORM,
      payload: error,
    });
  };

  //Va a tomar el ID del album que se esta agregando
  const getDefaultAlbum = (id) => {
    console.log(id);
    dispatch({
      type: GET_DEFAULT_ALBUM,
      payload: id,
    });
  };

  //Para filtrar las canciones de cada album
  const getAlbumSong = (id) => {
    dispatch({
      type: GET_ALBUM_SONG,
      payload: id,
    });
  };

  const deleteSong = (id) => {
    dispatch({
      type: DELETE_SONG,
      payload: id,
    });
  };
  return (
    <SongContext.Provider
      value={{
        selectedalbum: state.selectedalbum,
        songs: state.songs,
        errorform: state.errorform,
        selectedsong: state.selectedsong,
        addSong,
        setError,
        getDefaultAlbum,
        getAlbumSong,
        deleteSong,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
