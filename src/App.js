import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </div>
    );
  }
}

export default App;
