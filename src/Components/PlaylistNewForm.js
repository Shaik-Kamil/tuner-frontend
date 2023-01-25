import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function PlaylistNewForm({ id }) {
  let navigate = useNavigate();

  const addPlaylist = (newPlaylist) => {
    axios
      .post(`${API}/playlists`, newPlaylist)
      .then(
        () => {
          navigate(`/playlists/`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const [playlist, setPlaylist] = useState({
    title: '',
  });
  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlaylist(playlist);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={playlist.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Playlist Name"
          required
        />
        {/* <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          placeholder="Eminem"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={song.album}
          placeholder="..."
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text"
          onChange={handleCheckboxChange}
          checked={song.time}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        /> */}

        <br />

        <input type="submit" />
      </form>
      <Link to={`/playlists/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default PlaylistNewForm;
