import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal.jsx";
import { checkToken, authorize, register } from "../../utils/auth.js";
import { getSearchResult } from "../../utils/newsAPI.js";
import { keywordContext } from "../../contexts/keywordContext.js";
import { hasSearchedContext } from "../../contexts/hasSearchedContext.js";
import { currentUserContext } from "../../contexts/currentUserContext.js";
import { savedArticlesContext } from "../../contexts/savedArticlesContext";

import { searchResultContext } from "../../contexts/searchResultContext.js";
import Main from "../Main/Main.jsx";
import {
  getSavedArticles,
  removeSavedArticle,
  addSavedArticle,
} from "../../utils/savedArticlesApi.js";
import SavedNews from "../SavedNews/SavedNews";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const [savedArticles, setSavedArticles] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });

  const handleSearch = (keyWord) => {
    setKeyWord(keyWord);
    setIsLoading(true);
    getSearchResult(keyWord)
      .then((res) => {
        console.log(res);
        setSearchResult(res.articles);
        setHasSearched(true);

        setSearchError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setSearchError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRegisterModalClick = () => {
    setActiveModal("sign-up");
  };

  const handleSignInModalClick = () => {
    setActiveModal("sign-in");
  };

  const handleSuccessModal = () => {
    setActiveModal("success");
  };
  const onClose = () => {
    setActiveModal("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignUp = () => {
    register()
      .then((res) => {
        setCurrentUser({
          name: res.data.name,
          email: res.data.email,
          _id: res.data._id,
        });
        setIsLoggedIn(false);
        handleSuccessModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignIn = ({ email, password }) => {
    authorize({ email, password })
      .then(() => {
        checkToken()
          .then((res) => {
            setCurrentUser({
              name: res.data.name,
              email: res.data.email,
              _id: res.data._id,
            });
            setIsLoggedIn(true);
            onClose();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveArticle = ({ newsData }) => {
    removeSavedArticle(newsData)
      .then(() => {
        const unsavedNewsArticles = savedArticles.filter(
          (article) => article._id !== newsData._id
        );
        setSavedArticles(unsavedNewsArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSaveArticle = ({ newsData, keyword }) => {
    if (!savedArticles.find((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyword)
        .then((res) => {
          setSavedArticles([res, ...savedArticles]);
          const savedArticlesId = res._id;
          const newArticle = { ...newsData, _id: savedArticlesId };
          const newSearchResult = searchResult.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResult(newSearchResult);
        })
        .catch((err) => console.error(err));
    } else if (savedArticles.some((article) => article.link === newsData.url)) {
      removeSavedArticle(newsData)
        .then(() => {
          const unsaveNewsArticles = savedArticles.filter(
            (article) => article._id !== newsData._id
          );
          setSavedArticles(unsaveNewsArticles);

          const newArticle = { ...newsData, _id: "" };
          const newSearchResult = searchResult.map((article) =>
            article.url === newsData.url ? newArticle : article
          );
          setSearchResult(newSearchResult);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    checkToken()
      .then((res) => {
        if (res) {
          setCurrentUser(res.data);
          getSavedArticles()
            .then((res) => {
              setSavedArticles(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, [isLoggedIn]);

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal")) {
        onClose();
      }
    };
    document.addEventListener("click", handleOverlayClick);
    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <hasSearchedContext.Provider value={{ hasSearched, setHasSearched }}>
      <keywordContext.Provider value={{ keyWord, setKeyWord }}>
        <currentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <savedArticlesContext.Provider
            value={{ savedArticles, setSavedArticles }}
          >
            <searchResultContext.Provider
              value={{ searchResult, setSearchResult }}
            >
              <div className="page">
                <div className="page__content">
                  <BrowserRouter>
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <Main
                            handleSearch={handleSearch}
                            onLoginClick={handleSignInModalClick}
                            onLogout={handleLogout}
                            searchError={searchError}
                            isLoading={isLoading}
                            handleRemoveArticle={handleRemoveArticle}
                            handleSaveArticle={handleSaveArticle}
                            onRegisterClick={handleRegisterModalClick}
                          />
                        }
                      />

                      <Route
                        path="/saved-news"
                        element={
                          <SavedNews
                            handleRemoveArticle={handleRemoveArticle}
                          />
                        }
                      />
                    </Routes>
                  </BrowserRouter>

                  <RegisterModal
                    isOpen={activeModal === "sign-up"}
                    onClose={onClose}
                    onRegister={handleSignUp}
                    title="Sign up"
                    onLoginClick={handleSignInModalClick}
                    onRegisterClick={handleRegisterModalClick}

                    //  onRegister={handleSignUp}
                  />
                  <LoginModal
                    isOpen={activeModal === "sign-in"}
                    onClose={onClose}
                    onLogIn={handleSignIn}
                    title="Sign in"
                    onLoginClick={handleSignInModalClick}
                    onRegisterClick={handleRegisterModalClick}
                  />
                  <RegisterSuccessModal
                    onClose={onClose}
                    isOpen={activeModal === "success"}
                    onLoginClick={handleSignInModalClick}
                  />
                </div>
              </div>
            </searchResultContext.Provider>
          </savedArticlesContext.Provider>
        </currentUserContext.Provider>
      </keywordContext.Provider>
    </hasSearchedContext.Provider>
  );
}
export default App;