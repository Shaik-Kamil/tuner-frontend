import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="bg-orange-700 flex justify-between">
      <h1 className="font-signature text-7xl h-50 p-4">
        <Link to="/songs">Songs</Link>
      </h1>
      <div className="text-decoration-thickness: auto;">
        <button className="px-6 py-2 bg-amber-200 m-2 rounded-full mt-8 hover:bg-cyan-300">
          <Link to="/songs/new" className="underline decoration-1">
            New Songs
          </Link>
        </button>
        <button className="px-6 py-2 bg-amber-200 m-2 rounded-full mt-8 hover:bg-cyan-300">
          <Link to="/playlists">Playlists</Link>
        </button>
      </div>
    </nav>
  );
}
