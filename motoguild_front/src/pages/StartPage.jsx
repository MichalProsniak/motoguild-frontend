import { useState, useEffect } from "react";
import Login from "../components/Login";
import Registration from "../components/Registration";
import { useNavigate } from "react-router";
import Homepage from "./Homepage";
import logo from "../images/motoguild-start.png";

const StartPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  const [isRegistration, setIsRegistration] = useState(false);
  const [loginForm, setLoginForm] = useState("start-page-login-register");
  const [startText, setStartText] = useState("start-page-text");

  function handleMobileLogin() {
    setLoginForm("start-page-login-register show-login-form");
    setStartText("start-page-text hidden-start-text");
    setIsRegistration(false);
  }

  function handleMobileRegister() {
    setLoginForm("start-page-login-register show-login-form");
    setStartText("start-page-text hidden-start-text");
    setIsRegistration(true);
  }

  function handleMobileExit() {
    setLoginForm("start-page-login-register");
    setStartText("start-page-text");
    setIsRegistration(false);
  }

  return (
    <div>
      {!localStorage.getItem("token") ? (
        <div className="start-page-container">
          <section className="top-nav">
            <div>
              <img src={logo} className="logo-top-nav" alt="MotoGuild" />
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className="menu-button-container" for="menu-toggle">
              <div className="menu-button" onClick={handleMobileExit}></div>
            </label>
            <ul className="menu">
              <li onClick={handleMobileLogin}>Zaloguj</li>
              <li onClick={handleMobileRegister}>Zarejestruj</li>
            </ul>
          </section>
          <div className={startText}>
            <img src={logo} className="logo-start" alt="MotoGuild" />
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
          <div className={loginForm}>
            {isRegistration ? (
              <Registration setIsRegistration={setIsRegistration} />
            ) : (
              <Login setIsRegistration={setIsRegistration} />
            )}
          </div>
        </div>
      ) : (
        <Homepage />
      )}
    </div>
  );
};

export default StartPage;
