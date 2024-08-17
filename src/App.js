import  {useEffect, useState} from 'react'
import './App.css';

import MainApp from './MainApp';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

 

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  }

 



  return (
    <Router>
      <Routes>
        <Route path="/login" 
         element={isAuthenticated ?  <Navigate to="/app" />: <Login onLogin={handleLogin}/>}>
        </Route>
        <Route path="/app" element={isAuthenticated ? <MainApp /> : <Navigate to="/login" /> } />
        <Route path="*" element={ <Navigate to={isAuthenticated ?  "/app" : "/login"} /> } />
      </Routes>
    </Router>

  );
}

export default App;
