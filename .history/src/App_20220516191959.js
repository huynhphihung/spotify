import './App.css';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="Ap">
            <Navbar />
            <div>
                <DetailSong />
                <ListSongs />
            </div>
        </div>
    );
}

export default App;
