import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Context
import SongContext from "../context/Song/SongContext";

//Components
import SongsList from "./Lists/SongsList";

const Songs = () => {
  const songContext = useContext(SongContext);
  const { songs, errorform, addSong, setError } = songContext;

  const [song, setSong] = useState({
    name: "",
  });
  const [showForm, setShowForm] = useState(false);

  const { name } = song;

  const handleChange = (e) => {
    setError(false);
    setSong({
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setError(true);
      return;
    }

    addSong(song);
    setError(false);
    setSong({ name: "" });
    setShowForm(false);
  };

  return (
    <>
      <h2>Songs</h2>
      {!showForm ? (
        <div>
          <button type="button" onClick={handleClick}>
            Enter new Song
          </button>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Song´s Information</h4>
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                value={name}
                type="text"
                name="name"
                placeholder="Enter song´s name"
              />
            </div>
            <button type="submit">Submit</button>
          </form>

          {errorform ? (
            <p className="alert alert-danger">Error: Empty fields</p>
          ) : null}
        </div>
      )}

      {songs.length === 0 ? null : (
        <div>
          <SongsList />
        </div>
      )}
    </>
  );
};

export default Songs;
