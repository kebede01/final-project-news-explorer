import "./SavedNewsCardList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { SavedArticlesContext } from "../../contexts/SavedArticlesContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsCardList({ handleRemoveArticle, handleSaveArticle }) {
  const { savedArticles } = useContext(SavedArticlesContext);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <section className="news-card-list">
      <div className="news-card-list__container">
        {savedArticles
          .filter((article) => article.owner === currentUser._id)
          .map((article, index) => (
            <NewsCard
              newsData={article}
              key={`${article._id}-${index}`}
              handleRemoveArticle={handleRemoveArticle}
              handleSaveArticle={handleSaveArticle}
            />
          ))}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
