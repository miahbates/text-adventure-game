import React from "react";

export default function Player({ name }) {
  const [player, setPlayer] = React.useState(null);

  const USER_URL = `https://api.github.com/users/`;
  React.useEffect(() => {
    fetch(USER_URL + name)
      .then((res) => res.json())
      .then((data) => setPlayer(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (!player) {
    return <h1>Player Loading ...</h1>;
  } else {
    return (
      <div>
        <h2>{player.name}</h2>
        <img src={player.avatar_url} alt="" />
      </div>
    );
  }
}
