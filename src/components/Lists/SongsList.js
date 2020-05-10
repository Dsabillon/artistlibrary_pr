import React, { useContext } from "react";

//Context
import SongContext from "../../context/Song/SongContext";

//Component
import Song from "./Song";

const SongsList = () => {
  const songContext = useContext(SongContext);
  const { selectedsong } = songContext;

  return (
    <div>
      Songs List
      {selectedsong.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SongsList;
