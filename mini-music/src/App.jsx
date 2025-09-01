import { useState, useEffect} from 'react'
import SearchBar from './components/searchbar'
import CardList from './components/cardList';

function App() {

  const [songs, setSongs] = useState([])
  const [query, setQuery] = useState("Taylor Swift"); 

  const getSongs = async () => {
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`)
      const data = await response.json();
      setSongs(data.results);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getSongs(); 
  }, [query]) 

  return (
   <div>
      <h1>Mini Music App</h1>
      <SearchBar /> 
      <CardList songs={songs} />
      {/* <div>
        {songs.map((song) => (
          <div key={song.trackId}>
            <img src={song.artworkUrl100} alt={song.trackName} />
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default App

