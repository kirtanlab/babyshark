import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import OwnerDashboard from "./pages/OwnerDashboard/OwnerDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Login/>} />
            <Route path="owner-dashboard" element={<OwnerDashboard/>} />
            <Route path="admin-dashboard" element={<AdminDashboard/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
