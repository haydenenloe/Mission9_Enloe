import React from 'react';
import './App.css';
import teamsData from './CollegeBasketballTeams.json';

interface TeamInfo {
  school: string;
  name: string;
  city: string;
  state: string;
}

const Teams = teamsData.teams;

function Welcome() {
  return <h1>March Madness Team List</h1>;
}

class Team extends React.Component<TeamInfo> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div>
        <h2>School Name: {school}</h2>
        <h3>Mascot Name: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {Teams.map((teamNum) => (
        <Team {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
