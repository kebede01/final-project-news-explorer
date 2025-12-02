import NotFoundImg from "../../assets/not-found.svg";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <img className="not-found__img" src={NotFoundImg} alt="Not Found" />
      <h1 className="not-found__header">Nothing found</h1>
      <p className="not-found__content">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
}

export default NotFound;
