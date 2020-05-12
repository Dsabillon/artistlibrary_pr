import React, { useReducer } from "react";

import ArtistContext from "./ArtistContext";
import ArtistReducer from "./ArtistReducer";
import {
  GET_SELECTED_ARTIST,
  ADD_ARTIST,
  VALIDATE_FORM,
  DELELTE_ARTIST,
} from "../../types";

const ArtistState = (props) => {
  const initialState = {
    artists: [],
    errorform: false,
    artist: null,
  };

  const [state, dispatch] = useReducer(ArtistReducer, initialState);

  //----- METHODS -----//
  const addArtist = (artist) => {
    dispatch({
      type: ADD_ARTIST,
      payload: artist,
    });
  };

  const setError = (error) => {
    dispatch({
      type: VALIDATE_FORM,
      payload: error,
    });
  };

  //Get selected artist
  const getselectedArtist = (id) => {
    dispatch({
      type: GET_SELECTED_ARTIST,
      payload: id,
    });
  };

  const deleteArtist = (id) => {
    dispatch({
      type: DELELTE_ARTIST,
      payload: id,
    });
  };

  return (
    <ArtistContext.Provider
      value={{
        artist: state.artist,
        artists: state.artists,
        errorform: state.errorform,
        addArtist,
        setError,
        getselectedArtist,
        deleteArtist,
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistState;
