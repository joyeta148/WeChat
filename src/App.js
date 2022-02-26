import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">

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
    </div>
  );
}

export default App;
