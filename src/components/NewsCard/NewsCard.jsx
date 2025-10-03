import "./NewsCard.css";
// import { useLocation } from "react-router-dom";
import { keywordContext } from  "../../contexts/keywordContext.js";
import { savedArticlesContext } from "../../contexts/savedArticlesContext";
import { currentPageContext } from "../../contexts/currentPageContext";
import { currentUserContext } from "../../contexts/currentUserContext";
import { useContext, useEffect, useState } from "react";

function NewsCard({
  newsData,
  handleSaveArticle,
  handleRemoveArticle,
  onClick,
}) {
  let formattedDate;

  if (newsData.publishedAt) {
    formattedDate = new Date(newsData.publishedAt).toLocaleDateString(
      "default",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  } else {
    formattedDate = "";
  }

  // const location = useLocation();

  const { currentPage, setCurrentPage } = useContext(currentPageContext);
  const { savedArticles } = useContext(savedArticlesContext);
  const { keyword } = useContext(keywordContext);
  const { isLoggedIn } = useContext(currentUserContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleBookmarkClick = () => {
    handleSaveArticle({ newsData, keyword });
  };

  const handleRemoveClick = () => {
    handleRemoveArticle({ newsData });
  };

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname, setCurrentPage]);

  return (
    <section className="news-card">
      {/* Controls container */}
      <div className="news-card__controls">
        {currentPage === "/saved-news" && (
          <>
            <h2 className="news-card__keyword">{newsData.keyword}</h2>
            <div className="news-card__button-container">
              <div
                className={`news-card__popup-text ${
                  isHovered ? "" : "news-card__popup-text--hidden"
                }`}>
                Remove from saved
              </div>
              <button
                className="news-card__button-delete"
                onClick={handleRemoveClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </div>
          </>
        )}

        {isLoggedIn && currentPage === "/" && (
          <div className="news-card__button-container">
            <div
              className={`news-card__popup-text ${
                isHovered ? "" : "news-card__popup-text--hidden"
              }`}>
              {savedArticles.some(
                (savedArticles) => savedArticles.link === newsData.url
              )
                ? "Remove from saved"
                : "Save article"}
            </div>
            <button
              className={`news-card__button-bookmark ${
                savedArticles.some(
                  (savedArticles) => savedArticles.link === newsData.url
                )
                  ? "news-card__button-bookmark--marked"
                  : ""
              }`}
              onClick={
                newsData.isSaved ? handleRemoveClick : handleBookmarkClick
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        )}

        {!isLoggedIn && (
          <div className="news-card__button-container">
            <div
              className={`news-card__popup-text ${
                isHovered ? "" : "news-card__popup-text--hidden"
              }`}>
              Sign in to save articles
            </div>
            <button
              className="news-card__button-bookmark"
              onClick={onClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>
        )}
      </div>

      {/* Content container */}
      <div className="news-card__content">
        <a
          className="news-card__link"
          href={newsData.url}
          target="_blank"
          rel="noreferrer">
          {newsData.urlToImage && (
            <img
              className="news-card__image"
              src={newsData.urlToImage}
              alt={newsData.title}
            />
          )}

          <header className="news-card__text">
            <p className="news-card__date">{formattedDate}</p>
            <h3 className="news-card__title">{newsData.title}</h3>
            <p className="news-card__description">
              {newsData.text || newsData.description}
            </p>
            {newsData.source && (
              <p className="news-card__source">
                {newsData.source.name || newsData.source}
              </p>
            )}
          </header>
        </a>
      </div>
    </section>
  );
}

export default NewsCard;
