import React, { useContext } from "react";
import styled from "@emotion/styled";

//Context
import ArtistContext from "../../context/Artist/ArtistContext";
import AlbumContext from "../../context/Album/AlbumContext";

//Component
import Artist from "./Artist";

const ArtistsList = () => {
  const artistContext = useContext(ArtistContext);
  const { artists } = artistContext;

  const albumContext = useContext(AlbumContext);
  const { selectedartist } = albumContext;

  return (
    <div>
      Artists List
      {artists.map((item) => (
        <Artist item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ArtistsList;
