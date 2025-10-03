import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About.jsx";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal.jsx"
import { checkToken, authorize, register } from "../../utils/auth.js";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
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
 
  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn}
          onLoginClick={handleSignInModalClick}
          onLogout={handleLogout}
          currentUser={currentUser}
        />
        <About />
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
  );
}
export default App;
 