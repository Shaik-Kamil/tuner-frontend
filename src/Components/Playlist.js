import { Link } from 'react-router-dom';

export default function Playlist({ playlist }) {
  return (
    <tr>
      <td>
        <Link to={`/playlists/${playlist.id}`}></Link>
      </td>
      <td>
        <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
      </td>
    </tr>
  );
}
