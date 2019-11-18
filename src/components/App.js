import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"

class App extends React.Component {
  state = { images: [] }
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID a59f916fdf87a5f630697da67c422af3ccbb93b977fe4c6419e2601bb772e660"
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (<div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} />
    </div >);
  };
}

export default App;