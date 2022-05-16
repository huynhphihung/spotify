import './App.css';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="Ap">
            <Navbar />
            <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player">
                <DetailSong />
                <ListSongs />
            </div>
        </div>
    );
}

export default App;
