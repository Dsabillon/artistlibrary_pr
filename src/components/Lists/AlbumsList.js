import React, { useContext } from "react";

//Context
import AlbumContext from "../../context/Album/AlbumContext";

//Components
import Album from "./Album";

const AlbumsList = () => {
  const albumContext = useContext(AlbumContext);
  const { selectedAlbums } = albumContext;

  return (
    <div>
      AlbumsList
      {selectedAlbums.map((item) => (
        <Album item={item} key={item.id} />
      ))}
    </div>
  );
};

export default AlbumsList;
