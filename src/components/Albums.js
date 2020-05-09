import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

//Context
import AlbumContext from "../context/Album/AlbumContext";
import ArtistContext from "../context/Artist/ArtistContext";

//Components
import AlbumsList from "./Lists/AlbumsList";

const Albums = () => {
  const albumContext = useContext(AlbumContext);
  const {
    albums,
    selectedartist,
    errorform,
    addAlbum,
    setError,
  } = albumContext;

  const [album, setAlbum] = useState({
    name: "",
    year: 0,
  });
  const [showForm, setShowForm] = useState(false);

  const { name, year } = album;

  //FUNCTIONS
  const handleClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setError(false);

    setAlbum({
      ...album,
      [e.target.name]: e.target.value,
      id: uuidv4(),
      artist_creator: selectedartist,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || year === 0) {
      setError(true);
      console.log("empty fields");
      return;
    }
    setError(false);
    addAlbum(album);
    setAlbum({ name: "", year: 0 });
    setShowForm(false);
  };

  return (
    <>
      <h2>Albums</h2>
      {!showForm ? (
        <div>
          <button onClick={handleClick}>Enter new Album</button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Album´s Information</h4>
            <div>
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter album´s name"
              />
            </div>
            <div>
              <label htmlFor="year">Year</label>
              <input
                value={year}
                onChange={handleChange}
                type="text"
                name="year"
                placeholder="Enter album´s year"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {errorform ? (
            <p className="alert alert-danger">Error: Empty fields</p>
          ) : null}
        </div>
      )}

      {albums.length === 0 ? null : (
        <div>
          <AlbumsList />
        </div>
      )}
    </>
  );
};

export default Albums;
