import React from "react";

//Components
import SongsList from "./Lists/SongsList";

const Songs = () => {
  return (
    <>
      <h2>Songs</h2>
      <div>
        <button type="button">Enter new Song</button>
      </div>
      <div>
        <form>
          <h4>Song´s Information</h4>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter song´s name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <SongsList />
      </div>
    </>
  );
};

export default Songs;
