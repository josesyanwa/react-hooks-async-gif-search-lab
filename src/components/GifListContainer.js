import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  componentDidMount() {
    // Default query when the component mounts
    this.fetchGifs("your default query here");
  }

  fetchGifs = (query) => {
    const apiKey = "dc6zaTOxFJmzC"; // Use the provided API key
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const gifs = data.data.slice(0, 3); // Take the first 3 gifs from the response
        this.setState({ gifs });
      })
      .catch((error) => console.error("Error fetching gifs", error));
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
