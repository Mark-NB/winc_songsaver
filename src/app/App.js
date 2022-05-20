import React from 'react';
import AddSong from '../components/AddSong';
import Header from '../components/Header';
import SongList from '../components/SongList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddSong />
      <SongList />
    </div>
  );
}

export default App;
