import './app.scss'
import { useSelector } from 'react-redux';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import SinglePage from './pages/singlepage/SinglePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WritePage from './pages/writepage/WritePage';
import UserSetting from './pages/usersettings/UserSetting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';


function App() {
  const user = useSelector(state => state.auth.user);
  if (user) {
    localStorage.setItem("user", JSON.stringify(user))
  }
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          {/* <Route path="/" exact  element={<Home/>}> */}
          <Route path="/" exact element={<Home />} />

          <Route path="/post/:postId" element={<SinglePage />} />

          <Route path="/write" element={user ? <WritePage /> : <Login />} />

          <Route path="/setting" element={user ? <UserSetting /> : <Login />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
