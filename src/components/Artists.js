import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Context
import ArtistContext from "../context/Artist/ArtistContext";

//Component
import ArtistsList from "./Lists/ArtistsList";

const Artists = () => {
  const artistContext = useContext(ArtistContext);
  const { errorform, addArtist, setError } = artistContext;

  //LocalState
  const [artist, setArtist] = useState({
    name: "",
  });
  const [showForm, setShowForm] = useState(false);

  const { name } = artist;

  //Saving localState
  const hanldeChange = (e) => {
    setArtist({
      name: e.target.value,
      id: uuidv4(),
    });
    setError(false);
  };

  const handleClick = () => {
    setShowForm(true);
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      console.log("Error to add artist");
      setError(true);
      return;
    }

    setError(false);
    addArtist(artist);
    setArtist({ name: "" });
    setShowForm(false);
  };

  return (
    <>
      <h2>Artists</h2>

      {!showForm ? (
        <div>
          <button type="button" onClick={handleClick}>
            Enter new Artist
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Artist´s Information</h4>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={hanldeChange}
                value={name}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {errorform ? (
            <p className="alert alert-danger">Error: Nombre vacio</p>
          ) : null}
        </div>
      )}

      <div>
        <ArtistsList />
      </div>
    </>
  );
};

export default Artists;
