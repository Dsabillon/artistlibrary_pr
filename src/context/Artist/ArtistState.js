import React, { useReducer } from "react";

import ArtistContext from "./ArtistContext";
import ArtistReducer from "./ArtistReducer";
import { ADD_ARTIST, VALIDATE_FORM } from "../../types";

const ArtistState = (props) => {
  const initialState = {
    artists: [],
    errorform: false,
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
  return (
    <ArtistContext.Provider
      value={{
        artists: state.artists,
        errorform: state.errorform,
        addArtist,
        setError,
      }}
    >
      {props.children}
    </ArtistContext.Provider>
  );
};

export default ArtistState;
