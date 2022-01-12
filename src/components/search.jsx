import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
  inputRef = React.createRef();
  videoId = [];
  //   result;
  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.inputRef.current.value;

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&key=AIzaSyDD8izz7zlkkCSF97v-Qw0mEJQHuIADzxI`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        this.items = JSON.parse(result);
      })
      .catch((error) => console.log("error", error));
  };

  handleClick = (e) => {
    this.items.items.map((item) => {
      this.videoId.push(item.id.videoId);
    });
    console.log(this.videoId);
  };

  render() {
    return (
      <div className="search-container">
        <div className="logo-name-wrapper">
          <span className="youtube-logo" onClick={this.handleClick}>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span className="youtube-name">Youtube</span>
        </div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            ref={this.inputRef}
            className="search-bar"
            placeholder="Search..."
          />
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
