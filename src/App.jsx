import React from "react";
import Player from "./components/Player.jsx";
import Chapter from "./components/Chapter.jsx";
import logo from "./assets/images/logo.png";

import "./App.css";

function App() {
  const [name, setName] = React.useState(null);
  const [chapterStage, setChapterStage] = React.useState(0);
  const [life, setLife] = React.useState(3);

  return (
    <div className="App center">
      <img
        src={logo}
        alt="Fac Quest - your daily commute to space 4"
        className="logo"
      />
      <h1>FacQuest!</h1>
      <p className="subTitle">
        A text-based adventure of your commute to SPACE 4! Choose your player by
        GitHub username below. You have 3 lives to complete your quest!
      </p>
      <form
        className="loginForm"
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.searchUsername.value.replace(/</g, "&ltn;"));
        }}
      >
        <input
          type="search"
          name="searchUsername"
          className="playerInput"
          aria-label="enter your github username"
          required
        />
        <button type="submit" className="btn">
          Search Player
        </button>
      </form>
      <Player name={name} />
      <Chapter
        chapterStage={chapterStage}
        setChapterStage={setChapterStage}
        life={life}
        setLife={setLife}
      />
    </div>
  );
}

export default App;
