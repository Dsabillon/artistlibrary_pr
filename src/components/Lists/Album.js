import React, { useContext } from "react";

//Context
import SongContext from "../../context/Song/SongContext";
import AlbumContext from "../../context/Album/AlbumContext";

const Album = ({ item }) => {
  const songContext = useContext(SongContext);
  const { getAlbumSong } = songContext;

  const albumContext = useContext(AlbumContext);
  const { deleteAlbum } = albumContext;

  const handleSelect = (id) => {
    getAlbumSong(id);
  };

  const handleDelete = (id) => {
    deleteAlbum(id);
  };
  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
      >
        <p>{item.name}</p>
        <p>{item.year}</p>
        <button type="button">Edit</button>
        <button type="button" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
        <button type="button" onClick={() => handleSelect(item.id)}>
          Select
        </button>
      </div>
    </>
  );
};

export default Album;
