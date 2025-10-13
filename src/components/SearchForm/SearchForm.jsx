import "./SearchForm.css";
// import { useEffect } from 'react';

import { useContext } from "react";
import { KeywordContext } from "../../contexts/KeyWordContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";

function SearchForm({ handleSearch }) {
  const { keyWord, setKeyWord } = useContext(KeywordContext);
  const { setHasSearched } = useContext(HasSearchedContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(keyWord);
    setHasSearched(true); // Update the hasSearched context
  };
  const handleKeyWord = (event) => {
    setKeyWord(event.target.value);
  };
  return (
    <div className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <div className="search-form__field">
          <input
            className="search-form__input"
            placeholder="Enter topic"
            type="text"
            id="search"
            value={keyWord}
            onChange={handleKeyWord}
            required
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
export default SearchForm;
