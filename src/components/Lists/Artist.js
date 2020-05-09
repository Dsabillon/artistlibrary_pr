import React, { useContext } from "react";

import AlbumContext from "../../context/Album/AlbumContext";
import ArtistContext from "../../context/Artist/ArtistContext";

const Artist = ({ item }) => {
  const albumContext = useContext(AlbumContext);
  const { getArtistAlbums } = albumContext;

  const artistContext = useContext(ArtistContext);
  const { getselectedArtist } = artistContext;

  const handleSelect = (artist_id) => {
    getArtistAlbums(artist_id);
  };
  return (
    <>
      <div
        style={{ border: "1px solid black", margin: "10px", padding: "5px" }}
      >
        <p>{item.name}</p>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button" onClick={() => handleSelect(item.id)}>
          Select
        </button>
      </div>
    </>
  );
};

export default Artist;
