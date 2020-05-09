import React, { useContext } from "react";

import SongContext from "../../context/Song/SongContext";

import Song from "./Song";

const SongsList = () => {
  const songContext = useContext(SongContext);
  const { songs } = songContext;
  return (
    <div>
      Songs List
      {songs.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SongsList;
