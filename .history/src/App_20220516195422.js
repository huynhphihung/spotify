import './App.css';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';
import { Songs } from './Context';
import DataSong from './data/songs.json';

function App() {
    return (
        <div className="App">
            <Songs.Provider value={{}}>
                <Navbar />
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
                    <DetailSong />
                    <ListSongs />
                </div>
            </Songs.Provider>
        </div>
    );
}

export default App;
