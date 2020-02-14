import React from "react";
import axios from "axios";
import "./App.css";
import { PlayersCard } from "./components/PlayerCard";
import { Nav } from "./components/Nav";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/footballers`).then(res => {
      this.setState({
        players: res.data
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div>
          {this.state.players ? (
            this.state.players.map(player => {
              return <PlayersCard player={player} />;
            })
          ) : (
            <p>whoops no data</p>
          )}
        </div>
      </div>
    );
  }
}
export default App;
