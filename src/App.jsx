import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// TODO: Launch to cloudflare
function App() {
  //TODO: Load theme based on os
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  });

  return (
      
      <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900">
        <Header />

        <div className="transition-all duration-500 rounded mts-3 p-3 w-full mx-auto bg-gradient-to-tl from-cyan-700 to-indigo-700 dark:text-slate-900">
          <h1 className="p-10"><b>Joshua Brunscheen</b></h1>
          <h1 className="p-10 text-xl sm:text-4xl">CS and ITWS Student</h1>
          {/* //TODO: This needs to be its own class */}
          <a href="https://www.linkedin.com/in/joshua-brunscheen/" target="_blank">
            <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Contact </button>
          </a>
        </div>

        {/* TODO: Need to update raytracer code in github */}
        <div className="transition-all duration-500 rounded mt-3 p-3 w-full mx-auto bg-[url('../public/raytracer/longerMetalBalls.png')]">
          <h1 className="p-10 text-xl sm:text-4xl"><b>Most Recent Project</b></h1>
          <h1 className="p-10 text-xl sm:text-4xl">C++ Raytracer</h1>
          <h2><b>image generated with raytracer</b></h2>
          {/* //TODO: This needs to be its own class */}
          <Link to="/raytracer">
            <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Learn More </button>
          </Link>
        </div>

        <div className="w-full flex justify-center flex-wrap">
          {/* RPOST Tile */}
          <div className="transition-all duration-500 rounded mt-3 p-3 w-full sm:w-1/2 m-3 bg-gradient-to-tl from-red-500 to-red-500 dark:text-slate-900 flex justify-center flex-wrap">
            {/* TODO: Accessibility for images */}
            <img src="RPost.svg" className="p-10 w-3/4"></img>
            <h1 className="p-10 text-xl sm:text-4xl">The Unofficial Campus Social Media and Event Tracker of RPI</h1>
            {/* //TODO: This needs to be its own class */}
            <Link to="/rpost">
              <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Learn More </button>
            </Link>
          </div>

          {/* Path Finder Tile */}
          <div className="transition-all duration-500 rounded mt-3 p-3 w-full sm:w-2/5 m-3 bg-gradient-to-t from-slate-900 to-yellow-700 dark:text-slate-900">
            <h1 className="p-10 text-xl sm:text-4xl"><b>Java Graph ADT and Path Finder</b></h1>
            <img src="paths.png" className="p-10"></img>
            {/* //TODO: This needs to be its own class */}
            <Link to="/pathFinder">
              <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Learn More </button>
            </Link>
          </div>

          {/* TODO: Add pictures of results */}
          {/* Distance Field Tile */}
          <div className="transition-all duration-500 rounded mt-3 p-3 w-full sm:w-2/5 m-3 bg-gradient-to-t from-slate-500 to-slate-400 dark:text-slate-900">
            <h1 className="p-10 text-xl sm:text-4xl"><b>C++ Distance Field Calculator</b></h1>
            <img src="Rectangles.png" className="p-10"></img>
            <Link to="/distancefield">
              <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Learn More </button>
            </Link>
          </div>

          {/* Previous Internship Tile */}
          <div className="transition-all duration-500 rounded mt-3 p-3 w-full sm:w-2/5 m-3 bg-gradient-to-t from-sky-800 to-sky-700 dark:text-slate-900">
            <h1 className="p-10 text-xl sm:text-4xl"><b>Previous Internship:</b></h1>
            <h1 className="p-10 text-xl sm:text-4xl">CS Summer Intern at First Trust Portfolios</h1>
            <Link to="/ftpinternship">
              <button className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 hover:bg-slate-900 hover:text-slate-50 dark:hover:bg-slate-50 dark:hover:text-slate-900 mt-10 mb-10 transition duration-700 ease-in-out hover:rotate-12"> Learn More </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
  )
}

export default App
