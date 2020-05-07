import React, { useReducer } from "react";

import AlbumContext from "./AlbumContext";
import AlbumReducer from "./AlbumReducer";

const AlbumState = (props) => {
  const initialState = {
    album: "",
  };

  const [state, dispatch] = useReducer(AlbumReducer, initialState);
  return (
    <AlbumContext.Provider value={{}}>{props.children}</AlbumContext.Provider>
  );
};

export default AlbumState;
