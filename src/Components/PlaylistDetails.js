import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Songs from './Songs';

export default function PlaylistDetails() {
  const [playlist, setPlaylist] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/playlists/${id}`).then((res) => {
      setPlaylist(res.data);
    });
  }, [id, navigate, API]);

  const deletePlaylist = () => {
    axios
      .delete(`${API}/playlists/${id}`)
      .then(() => {
        navigate(`/playlists`);
      })
      .catch((c) => console.error('catch', c));
  };
  const handleDelete = () => {
    deletePlaylist();
  };
  return (
    <div>
      <article>
        <div>{playlist.title}</div>
        <div>
          <div>
            {' '}
            <Link to={`/playlists`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/playlists/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      <Songs />
    </div>
  );
}
