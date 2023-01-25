import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import Error from './Pages/Error';
import EditPlaylist from './Pages/PlaylistEdit';
import NewPlaylist from './Pages/NewPlaylist';
import PlaylistIndex from './Pages/PlaylistIndex';
import ShowPlaylists from './Pages/PlaylistShow';

// NavBar
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/songs" element={<Index />}></Route>
            <Route path="/songs/new" element={<New />}></Route>
            <Route path="/songs/:id" element={<Show />}></Route>
            <Route path="/songs/:id/edit" element={<Edit />}></Route>
            <Route path="/playlists " element={<PlaylistIndex />}></Route>
            <Route path="/playlists/new " element={<NewPlaylist />}></Route>
            <Route path="/playlists/:id " element={<ShowPlaylists />}></Route>
            <Route
              path="/playlists/:id/edit "
              element={<EditPlaylist />}
            ></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
