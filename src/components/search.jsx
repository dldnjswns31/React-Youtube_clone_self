import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
  inputRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.inputRef.current.value;
    console.log(value);
  };
  render() {
    return (
      <div className="search-container">
        <form className="search-form" onSubmit={this.handleSubmit}>
          <span className="youtube-logo">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span className="youtube-name">Youtube</span>
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
