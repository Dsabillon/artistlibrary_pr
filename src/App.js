import React from "react";

//Context
import ArtistState from "./context/Artist/ArtistState";
import AlbumState from "./context/Album/AlbumState";
import SongState from "./context/Song/SongState";

//Components
import Artists from "./components/Artists";
import Albums from "./components/Albums";
import Songs from "./components/Songs";

function App() {
  return (
    <ArtistState>
      <AlbumState>
        <SongState>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 border text-center">
                <Artists />
              </div>
              <div className="col-md-4 border text-center">
                <Albums />
              </div>
              <div className="col-md-4 border text-center">
                <Songs />
              </div>
            </div>
          </div>
        </SongState>
      </AlbumState>
    </ArtistState>
  );
}

export default App;
