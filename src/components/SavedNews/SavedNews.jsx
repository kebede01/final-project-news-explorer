import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const SavedNews = ({ handleRemoveArticle }) => {
  return (
    <>
      <Navigation />
      <section className="saved-news">
        <SavedNewsHeader />
        <SavedNewsCardList handleRemoveArticle={handleRemoveArticle}  />
      </section>
    </>
  );
};

export default SavedNews;
