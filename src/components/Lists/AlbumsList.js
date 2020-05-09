import React, { useContext } from "react";

//Context
import AlbumContext from "../../context/Album/AlbumContext";

//Components
import Album from "./Album";

const AlbumsList = () => {
  const albumContext = useContext(AlbumContext);
  const { albums } = albumContext;

  return (
    <div>
      AlbumsList
      {albums.map((item) => (
        <Album item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AlbumsList;
