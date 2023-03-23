import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Login from './pages/Login';
import UserDetail from './pages/UserDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Layout/>}/>
      <Route path = "Login" element = {<Login/>}/>
      <Route path = 'UserDetails' element = {<UserDetail/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
