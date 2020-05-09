import React, { useReducer } from "react";
import { ADD_SONG, VALIDATE_FORM } from "../../types";

import SongContext from "./SongContext";
import SongReducer from "./SongReducer";

const SongState = (props) => {
  const initialState = {
    songs: [],
    errorform: false,
  };

  const [state, dispatch] = useReducer(SongReducer, initialState);

  //-----METHODS-----//
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
  return (
    <SongContext.Provider
      value={{
        songs: state.songs,
        errorform: state.errorform,
        addSong,
        setError,
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default SongState;
