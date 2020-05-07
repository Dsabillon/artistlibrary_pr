import React, { useReducer } from "react";

import SongContext from "./SongContext";
import SongReducer from "./SongReducer";

const SongState = (props) => {
  const initialState = {
    song: "",
  };

  const [state, dispatch] = useReducer(SongReducer, initialState);
  return (
    <SongContext.Provider value={{}}>{props.children}</SongContext.Provider>
  );
};

export default SongState;
