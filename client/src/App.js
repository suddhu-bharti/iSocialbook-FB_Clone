import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={user ? <Home /> : <Navigate to="/login" />} />
          <Route
            path="login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          {user && (
            <>
              <Route path="profile/:profileId" element={<Profile />} />
              <Route path="timeline" element={<Home timeline="yes" />} />
              <Route path="messenger" element={<Messenger />} />
            </>
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
