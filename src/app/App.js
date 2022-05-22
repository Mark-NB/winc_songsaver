import React from 'react';
import AddSong from '../components/AddSong';
import Header from '../components/Header';
import SongList from '../components/SongList';
import About from '../components/About';
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const aboutAppToggle = useSelector((state) => state.about[0]);

  return (
    <div className="App">
      <Header />
      { aboutAppToggle ? "" : <AddSong />}
      { aboutAppToggle ? "" : <SongList />}
      { aboutAppToggle ? <About /> : ""}
    </div>
  );
}

export default App;
