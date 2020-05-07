import React from "react";

//Components
import AlbumsList from "./Lists/AlbumsList";

const Albums = () => {
  return (
    <>
      <h2>Albums</h2>
      <div>
        <button>Enter new Album</button>
      </div>
      <div>
        <form>
          <h4>Album´s Information</h4>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Enter album´s name" />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input type="text" name="year" placeholder="Enter album´s year" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <AlbumsList />
      </div>
    </>
  );
};

export default Albums;
