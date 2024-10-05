import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Raytracer from './Raytracer.jsx'
import RPost from './RPost.jsx'
import PathFinder from './PathFinder.jsx'
import DistanceField from './DistanceField.jsx'
import FTPIntern from './FTPIntern.jsx'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/raytracer" element={<Raytracer />} />
        <Route exact path="/rpost" element={<RPost />} />
        <Route exact path="/pathfinder" element={<PathFinder />} />
        <Route exact path="/distancefield" element={<DistanceField />} />
        <Route exact path="/ftpinternship" element={<FTPIntern />} />
      </Routes>
      {/* <App />   */}
    </Router>
  </StrictMode>,
)
