import React from "react";

export const PlayersCard = ({ player }) => {
  console.log(player);
  return (
    <div className="card-wrapper">
      {/* <h1>Player goes here</h1> */}
      <h1 className="card-name">{player.name}</h1>
      <h2 className="card-team">Team: {player.team}</h2>
      <h4 className="card-rank">World Ranking: {player.rank}</h4>
    </div>
  );
};
