import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
function App() {
    return (
        <div className="App">
            <Songs.Provider value={{ DataSongs }}>
                <Navbar />
                <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
                    <DetailSong />
                    <ListSongs />
                </div>
                
            </Songs.Provider>
        </div>
    );
}

export default App;
