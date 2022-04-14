import './app.scss'
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import SinglePage from './pages/singlepage/SinglePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<SinglePage/>} />
      </Routes>
    </BrowserRouter>
     
      
    </>
  );
}

export default App;
