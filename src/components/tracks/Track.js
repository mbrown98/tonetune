import React from "react";

import { Link } from "react-router-dom";

const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <card className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i>Track
            </strong>
            : {track.track_name} <br />
            <strong>
              <i className="fas fa-play"></i>Album
            </strong>{" "}
            : {track.album_name} <br />
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            View Lyrics
          </Link>
        </div>
      </card>
    </div>
  );
};

export default Track;
