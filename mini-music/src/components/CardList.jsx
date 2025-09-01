import SongCard from './songCard';

function CardList({ songs }) {
  return (
    <div className="card-list">
      {songs.map((song) => (
        <SongCard key={song.trackId} song={song} />
      ))}
    </div>
  );
}

export default CardList;
