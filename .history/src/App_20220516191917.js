import './App.css';
import DetailSong from './components/DetailSong';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="Ap">
            <Navbar />
            <div>
              <DetailSong />
            </div>
        </div>
    );
}

export default App;
