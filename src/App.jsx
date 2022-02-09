import React from "react";
import Player from "./components/Player.jsx";
import Chapter from "./components/Chapter.jsx";

import "./App.css";

function App() {
  const [name, setName] = React.useState(null);
  const [chapterStage, setChapterStage] = React.useState(0);
  const [life, setLife] = React.useState(3);

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.searchUsername.value);
        }}
      >
        <input type="search" name="searchUsername" />
        <button type="submit">Search Player</button>
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
