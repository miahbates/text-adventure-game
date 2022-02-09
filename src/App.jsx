import React from "react";
import Player from "./components/Player.jsx";

import "./App.css";

function App() {
  const [name, setName] = React.useState(null);

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
    </div>
  );
}

export default App;
