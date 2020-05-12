import React, { useContext } from "react";

//Context
import AlbumContext from "../../context/Album/AlbumContext";
import ArtistContext from "../../context/Artist/ArtistContext";

const Artist = ({ item }) => {
  const albumContext = useContext(AlbumContext);
  const { getArtistAlbums } = albumContext;

  const artistContext = useContext(ArtistContext);
  const { deleteArtist } = artistContext;

  const handleSelect = (artist_id) => {
    getArtistAlbums(artist_id);
  };

  const handleDelete = (artist_id) => {
    deleteArtist(artist_id);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #e1e1e1",
          margin: "10px",
          padding: "10px",
        }}
      >
        <p>{item.name}</p>
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

export default Artist;
