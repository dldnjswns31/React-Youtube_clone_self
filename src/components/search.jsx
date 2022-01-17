import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Search extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.inputRef.current.value;
    this.props.onSubmit(value);
    this.formRef.current.reset();
  };

  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="search-container">
        <div className="logo-name-wrapper" onClick={this.handleClick}>
          <span className="youtube-logo">
            <FontAwesomeIcon icon={faYoutube} />
          </span>
          <span className="youtube-name">Youtube</span>
        </div>
        <form
          ref={this.formRef}
          className="search-form"
          onSubmit={this.handleSubmit}
        >
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
