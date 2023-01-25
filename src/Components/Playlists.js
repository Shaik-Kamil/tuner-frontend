import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Playlist from './Playlist';

const API = process.env.REACT_APP_API_URL;

export default function Playlists() {
  const [playlist, setPlaylist] = useState([]);

  console.log(API);

  useEffect(() => {
    axios
      .get(`${API}/playlists`)
      .then((res) => setPlaylist(res.data))
      .catch((c) => console.warn('catch', c));
  }, []);
  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>See this playlist</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {playlist.map((playlist) => {
              return <Playlist key={playlist.id} playlist={playlist} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
