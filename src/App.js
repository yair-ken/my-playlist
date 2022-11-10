import Header from './componait/header/Header.jsx'
import Song from './componait/Song/Song.jsx'
import './App.css';

let x= "yair"
const songs = [
  {
    title: "song1",
    subtitle: "best song",
    id: "v12",
    thumbnail: "./path/to/some/image",
    artist: "moshe",
    duration: "12:20",
    views: 12353,
  },
  {
    title: "song2",
    subtitle: "best song",
    id: "v13",
    thumbnail: "./path/to/some/image",
    artist: "moshe",
    duration: "12:20",
    views: 12353,
  },
  {
    title: "song3",
    subtitle: "best song",
    id: "v14",
    thumbnail: "./path/to/some/image",
    artist: "moshe",
    duration: "12:20",
    views: 12353,
  },
];



function App() {
  return (
    <>
      <header className="App-header">
<Header className="App-header" />
<Song name={songs[0].name}/>
      </header>
    <div className="App">
    {x}
    </div>
    </>
  );
}

export default App;
