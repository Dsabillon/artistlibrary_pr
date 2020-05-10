import React, { useContext } from "react";

//Context
import SongContext from "../../context/Song/SongContext";

const Album = ({ item }) => {
  const songContext = useContext(SongContext);
  const { getAlbumSong } = songContext;

  const handleSelect = (id) => {
    getAlbumSong(id);
  };
  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
      >
        <p>{item.name}</p>
        <p>{item.year}</p>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button" onClick={() => handleSelect(item.id)}>
          Select
        </button>
      </div>
    </>
  );
};

export default Album;
