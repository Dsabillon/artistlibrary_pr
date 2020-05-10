import React, { useContext } from "react";

//Context
import ArtistContext from "../../context/Artist/ArtistContext";

//Component
import Artist from "./Artist";

const ArtistsList = () => {
  const artistContext = useContext(ArtistContext);
  const { artists } = artistContext;

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
