import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import GitHubPage from './components/GitHubPage'
import ReactDOM from 'react-dom';
import ItemsManagement from './pages/ItemsManagement';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/github" element={<GitHubPage />} /> {/* https://github.com/MatheusArtur0/PetHelp-WEB.git */}
        <Route path="/ItemsManagement" element={<ItemsManagement/>}/>
      </Routes>
    </Router>
  );
}

export default App;
