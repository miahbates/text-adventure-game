import React from "react";

export default function Player({ name }) {
  const [player, setPlayer] = React.useState(null);

  const USER_URL = `https://api.github.com/users/${name}`;
  React.useEffect(() => {
    fetch(USER_URL)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
  }, [USER_URL]);

  if (!player) {
    return <h1>Player Loading ...</h1>;
  } else {
    return (
      <div className="player">
        <h2 className="player__username">{player.name}</h2>
        {player.avatar_url ===
        "https://avatars.githubusercontent.com/u/5909549?v=4" ? null : (
          <img className="player__avatar" src={player.avatar_url} alt="" />
        )}
      </div>
    );
  }
}
