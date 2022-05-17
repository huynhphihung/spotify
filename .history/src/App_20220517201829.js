import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './components/Playing';
function App() {
    const [song, setSong] = useState(DataSongs[0]);
    const handleSetSong = (idSong) => {
        const song = DataSongs.find((song) => song.id === idSong);
        if (!song) setSong(DataSongs[0]);
        else setSong(song);
    };
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
                <Navbar />
                <div className="md:grid xl:grid grid-cols-3 bg-slate-700 h-screen-navbar-player lg:block overflow-hidden md:over ">
                    <DetailSong />
                    <ListSongs />
                </div>
                <Playing />
            </Songs.Provider>
        </div>
    );
}

export default App;
