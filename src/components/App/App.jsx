import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import RegisterModal from "../../../version-2_news_explorer/src/components/RegisterModal/RegisterModal.jsx";
import LoginModal from "../../../version-2_news_explorer/src/components/LoginModal/LoginModal.jsx";
import RegisterSuccessModal from "../../../version-2_news_explorer/src/components/RegisterSuccessModal/RegisterSuccessModal.jsx";
import { getUserInfo, authorize, register } from "../../../version-2_news_explorer/src/utils/auth.js";
import { getSearchResult } from "../../../version-2_news_explorer/src/utils/newsAPI.js";
import { KeywordContext } from "../../../version-2_news_explorer/src/contexts/KeywordContext.js";
import { HasSearchedContext } from "../../../version-2_news_explorer/src/contexts/HasSearchedContext.js";
import { CurrentUserContext } from "../../../version-2_news_explorer/src/contexts/CurrentUserContext.js";
import { SavedArticlesContext } from "../../../version-2_news_explorer/src/contexts/SavedArticlesContext.js";

import { SearchResultContext } from "../../../version-2_news_explorer/src/contexts/SearchResultContext.js";
import Main from "../../../version-2_news_explorer/src/components/Main/Main.jsx";
import {
  getSavedArticle,
  removeSavedArticle,
  addSavedArticle,
} from "../../../version-2_news_explorer/src/utils/savedArticlesApi.js";
import SavedNews from "../../../version-2_news_explorer/src/components/SavedNews/SavedNews.jsx";
import * as tokenValue from "../../../version-2_news_explorer/src/utils/token.js";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchResult, setSearchResult] = useState([
    {
      _id: "65f7368dfb74bd6a92114c85",
      author: "author",
      title: "title",
      description: "description",
      url: "https://example.com",
      urlToImage: "https://image.com",
      publishedAt: "2025-10-01T19:45:48Z",
      content: "content",
      source: "source",
      keyword: "keyword",
    },
  ]);

  const [hasSearched, setHasSearched] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [keyWord, setKeyWord] = useState("");
  const [savedArticles, setSavedArticles] = useState([
    {
      _id: "65f7368dfb74bd6a92114c85",
      author: "author",
      title: "title",
      description: "description",
      url: "https://example.com",
      urlToImage: "https://image.com",
      publishedAt: "2025-10-01T19:45:48Z",
      content: "content",
      source: "source",
      keyWord: "keyword",
    },
  ]);
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
        setSearchResult(res.articles.map((article) => {
          return {...article, keyWord }
        }));
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
    setCurrentUser({
      name: "",
      email: "",
      _id: "",
    });
    tokenValue.removeToken();
  };
// I added the new {} after trying to update on 11/09/2025
  const handleSignUp = ({ username, email, password }) => {
    return register(username, email, password)
      .then((res) => {
        setCurrentUser({
          name: res.data.username,
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

  const handleSignIn = (email, password) => {
     if (!email || !password) {
      return;
    }
    return authorize(email, password)
      .then((data) => {
        tokenValue.setToken(data.token); 
        return getUserInfo(data.token).then((res) => {
          setIsLoggedIn(true);

           setCurrentUser({
          name: res.data.username,
          email: res.data.email,
          _id: res.data._id,
        });
          
        });
      })
      
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

  const handleSaveArticle = ({ newsData, keyWord }) => {
    if (!savedArticles.find((article) => article.link === newsData.url)) {
      addSavedArticle(newsData, keyWord)
        .then((res) => {
          console.log(res);
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
    const jwt = tokenValue.getToken();
     if (!jwt) {
      return;
    }
     getUserInfo(jwt)
    .then((res) => {
         
      setCurrentUser({...res.data, name:res.data.username });
      setIsLoggedIn(true);
          getSavedArticle(jwt)
            .then((res) => {
              setSavedArticles(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        
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
    <HasSearchedContext.Provider value={{ hasSearched, setHasSearched }}>
      <KeywordContext.Provider value={{ keyWord, setKeyWord }}>
        <CurrentUserContext.Provider value={{ isLoggedIn, currentUser }}>
          <SavedArticlesContext.Provider
            value={{ savedArticles, setSavedArticles }}
          >
            <SearchResultContext.Provider
              value={{ searchResult, setSearchResult }}
            >
              <div className="page">
                <div className="page__content">
                  <BrowserRouter basename="/final-project-news-explorer">
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
            </SearchResultContext.Provider>
          </SavedArticlesContext.Provider>
        </CurrentUserContext.Provider>
      </KeywordContext.Provider>
    </HasSearchedContext.Provider>
  );
}
export default App;
