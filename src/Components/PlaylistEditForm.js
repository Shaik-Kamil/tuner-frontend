import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function PlaylistEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [playlist, setPlaylist] = useState({
    title: '',
  });

  const updatePlaylist = (updatedPlaylist) => {
    axios
      .put(`${API}/playlists/${id}`, updatedPlaylist)
      .then(
        () => {
          navigate(`/playlists/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  const handleTextChange = (event) => {
    setPlaylist({ ...playlist, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/playlists/${id}`).then(
      (response) => setPlaylist(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePlaylist(playlist, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={playlist.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title of Playlist"
          required
        />
        {/* <label htmlFor="url">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={playlist.artist}
          placeholder="Dr.Dre"
          onChange={handleTextChange}
        />
        <label htmlFor="album">Album:</label>
        <input
          id="album"
          type="text"
          name="album"
          value={playlist.album}
          placeholder="..."
          onChange={handleTextChange}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="text" */}
        {/* //   onChange={handleCheckboxChange} */}
        {/* checked={playlist.time} */}
        {/* /> */}
        {/* <label htmlFor="is_favorite">Favorite:</label> */}
        {/* <input
          id="is_favorite"
          type="checkbox" */}
        {/* //   onChange={handleCheckboxChange} */}
        {/* checked={playlist.is_favorite} */}
        {/* /> */}

        <br />

        <input type="submit" />
      </form>
      <Link to={`/playlists/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default PlaylistEditForm;
