import './SearchForm.css'
// import { useEffect } from 'react';

function SearchForm() {
  

 
  return (
    <div  className="search-form">
      <form className="search-form__container" >
        <div className="search-form__field">
          <input
            className="search-form__input"
        placeholder="Enter topic"
         type="text"
            id="search"
            // value={}
            
     
            required
          ></input>
          <button
            type="submit"
            className="search-form__button"
      
          >
            Search
          </button>
        </div>

        </form>
    </div>
  
  )
}
export default SearchForm;
