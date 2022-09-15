import { useState, useEffect } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router";
import Homepage from "./Homepage";
import logo from "../images/logo.png";

const StartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  const [isRegistration, setIsRegistration] = useState(true);
  const [loginStyles, setLoginStyles] = useState(
    "login-register-switch-login login-register-no-active"
  );
  const [registerStyles, setRegisterStyles] = useState(
    "login-register-switch-register login-register-active"
  );

  function changeActionToLogin() {
    setLoginStyles("login-register-switch-login login-register-active");
    setRegisterStyles(
      "login-register-switch-register login-register-no-active"
    );
    setIsRegistration(false);
  }

  function changeActionToRegister() {
    setLoginStyles("login-register-switch-login login-register-no-active");
    setRegisterStyles("login-register-switch-register login-register-active");
    setIsRegistration(true);
  }

  return (
    <div>
      {!localStorage.getItem("token") ? (
        <div className="start-page-container">
          <div className="navbar-custom navbar-startpage">
            <a className="navbar-brand" href="/">
              <img src={logo} className="logo-navbar" alt="MotoGuild" />
            </a>
          </div>
          <div className="start-page-text">
            <p className="start-page-text-header">
              Czołem Bracia Motocykliści!
            </p>

            <p className="start-page-text-p">
              Witamy na naszej niekomercyjnej stronie, mającej na celu rozbudowę
              jednośladowej społeczności. <br></br>
              Umożliwiamy Wam dodawanie i wyszukiwanie ciekawych tras, na
              podstawie których, możecie tworzyć i uczestniczyć we wspólnych
              przejazdach. <br></br>
              Dodatkowo za pośrednictwem naszej witryny możecie śledzić
              wydarzenia w swojej okolicy, zakładać i dołączać do różnego
              rodzaju grup tematycznych, rozbudowywać i umacniać lokalną
              społeczność. <br></br>
              MotoGuild to Braterska Gildia Motocyklowa, w której każdy Biker
              jest mile widziany. <br></br>
              Oczekujemy jedynie wzajemnego szacunku i miłości do jednośladów.{" "}
              <br></br>
              No to w drogę!
              <br></br>
              <br></br>
              Załoga MotoGuild
            </p>
          </div>
          <div className="start-page-login-register">
            <div className="login-register-switch">
              <div onClick={changeActionToLogin} className={loginStyles}>
                Zaloguj
              </div>
              <div onClick={changeActionToRegister} className={registerStyles}>
                Zarejestruj
              </div>
            </div>
            {isRegistration ? <Registration /> : <Login />}
          </div>
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default StartPage;
