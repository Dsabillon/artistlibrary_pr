import React, { useContext } from "react";

//Context
import SongContext from "../../context/Song/SongContext";

const Song = ({ item }) => {
  const songContext = useContext(SongContext);
  const { deleteSong } = songContext;

  const handleDelete = (id) => {
    deleteSong(id);
  };

  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
      >
        <p>{item.name}</p>
        <button type="button">Edit</button>
        <button type="button" onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Song;
