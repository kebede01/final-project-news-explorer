import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState, useContext } from "react";
import { SearchResultContext } from "../../contexts/SearchResultContext";
import { HasSearchedContext } from "../../contexts/HasSearchedContext";

const NewsCardList = ({
  handleSaveArticle,
  handleRemoveArticle,
  onLoginClick,
}) => {
  const [cardsDisplayed, setCardsDisplayed] = useState(3);

  const { searchResult } = useContext(SearchResultContext);
  const { hasSearched } = useContext(HasSearchedContext);

  const increaseVisibleCards = () => {
    setCardsDisplayed(cardsDisplayed + 3);
  };

  return (
    <section className="news-card-list">
      {hasSearched && searchResult.length > 0 &&
        (
        <>
          <h2 className="news-card-list__header">Search results</h2>
          <ul className="news-card-list__container">
            {searchResult.slice(0, cardsDisplayed).map((result, index) => (
              <li className="news-card-list__item" key={result.id || index}>
                <NewsCard
                  newsData={result}
                  handleSaveArticle={handleSaveArticle}
                  handleRemoveArticle={handleRemoveArticle}
                  onClick={onLoginClick}
                />
              </li>
            ))}
          </ul>
          <button
            className={`news-card-list__button ${
              cardsDisplayed >= searchResult.length
                ? "news-card-list__button--hidden"
                : ""
            }`}
            onClick={increaseVisibleCards}>
            Show more
          </button>
        </>
      )}
    </section>
  );
};

export default NewsCardList;
