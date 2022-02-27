import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId"
                element={<Chat />} ></Route>

              <Route exact path="/"></Route>
              {/* element={<Chat />} */}
              {/* </Route> */}
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
