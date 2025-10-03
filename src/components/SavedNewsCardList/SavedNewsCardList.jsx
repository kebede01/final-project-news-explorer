import "./SavedNewsCardList.css";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { savedArticlesContext } from "../../contexts/savedArticlesContext";
import { currentUserContext } from "../../contexts/currentUserContext";

function SavedNewsCardList({ handleRemoveArticle, handleSaveArticle }) {
  const { savedArticles } = useContext(savedArticlesContext);
  const { currentUser } = useContext(currentUserContext);
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
