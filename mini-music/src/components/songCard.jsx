import React from 'react'
import { useState, useEffect } from 'react'

const SongCard = ({ song }) => {

    const [liked, setLiked] = useState(false);

    const updateLiked = (value) => {
        setLiked(value);
    };

  return (
    <div>
        <div className="song-card">
            <img src={song.artworkUrl100} alt={song.trackName} />
            <h3>{song.trackName}</h3>
            <p>{song.artistName}</p>
            </div>
            <button onClick={() => setLiked(!liked)} className='like'>{liked ? 'Unlike' : 'Like'}</button>
    </div>
  )
}

export default SongCard
