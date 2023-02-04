import { useState, useEffect } from 'react';
import axios from 'axios';
import Song from './Song';

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/songs/`)
      .then((response) => setSongs(response.data))
      .catch((c) => console.warn('catch', c));
  }, []);
  return (
    <div className="Songs">
      <section className="">
        <table className="bg-orange-500 w-full text-sm text-left ">
          <thead className="bg-orange-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                Favorite
              </th>
              <th scope="col" className="px-6 py-3">
                Take me there
              </th>
              <th scope="col" className="px-6 py-3">
                See the Songs
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              return <Song key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Songs;
