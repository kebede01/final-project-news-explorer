import { HasSearchedContext } from "../../contexts/HasSearchedContext"
import { SearchResultContext } from "../../contexts/SearchResultContext"
import Header from "../Header/Header"
import Preloader from "../Preloader/Preloader"
import About from "../About/About"
import NotFound from "../NotFound/NotFound"
import NewsCardList from "../NewsCardList/NewsCardList"
import Footer from "../Footer/Footer"
import { useContext } from "react";

function Main({
 handleSearch,
  onLoginClick,
  onLogout,

   searchError,
  isLoading,
 handleRemoveArticle,
  handleSaveArticle,
}) {
  const { searchResult } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);
 

  return (
    <>
      <Header
        onLoginClick={onLoginClick}
        onLogout={onLogout}
      
        handleSearch={handleSearch}
      />
      <main className="main">
        <div className="main__content">
          {isLoading ? (
            <Preloader />
          ) : hasSearched && searchResult.length > 0 ? (
            <NewsCardList
              onLoginClick={onLoginClick}
              handleSaveArticle={handleSaveArticle}
              handleRemoveArticle={handleRemoveArticle}
            />
          ) : hasSearched && searchResult.length === 0 ? (
            <NotFound />
          ) : searchError === true ? (
            <p className="main__error-message">
              Sorry, something went wrong during the request. There may be a
              connection issue or the server may be down. Please try again
              later.
            </p>
          ) : (
            ""
          )}
        </div>
        <About />
        <Footer/>
      </main>
    </>
  );
}

export default Main;
