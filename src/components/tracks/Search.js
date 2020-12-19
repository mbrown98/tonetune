import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

class Search extends Component {
  state = {
    trackLyrics: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=${this.state.trackLyrics}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        });
        this.setState({ trackLyrics: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4 searchCard">
              <h1 className="display-4 text-center">Search For A Song</h1>
              <p className="lead text-center">Know the Lyrics? Find the Song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                {" "}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Lyrics..."
                    name="trackLyrics"
                    value={this.state.trackLyrics}
                    onChange={this.onChange}
                  />
                </div>
                <button className="btn btn-primary btn-lg  mb-5" type="submit">
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
