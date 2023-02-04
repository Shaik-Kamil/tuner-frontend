import { Link } from 'react-router-dom';

function Song({ song }) {
  return (
    <tr class="even:bg-yellow-500">
      <td className="px-6 py-4 ">
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={song.url} target="_blank" rel="noreferrer">
          {song.name}
        </a>
      </td>
      <td>
        <Link to={`/songs/${song.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Song;
