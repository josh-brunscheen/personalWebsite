import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Header() {
  const toggleTheme = () => {
    //Needs a way to store this info?
    document.body.classList.toggle('dark');
    // if (localStorage.getItem('dark-mode') === 'false') {
    //   document.documentElement.classList.add('dark');
    //   localStorage.setItem('dark-mode', true);
    //   alert('here')
    // } else {
    //   document.documentElement.classList.remove('dark');
    //   localStorage.setItem('dark-mode', false);
    // }
  }

  return (
    <header className="transition-all duration-500 w-100% flex text-slate-900 border-2 border-t-0 border-l-0 border-r-0 top-0 sticky border-slate-900 p-3 bg-slate-50 dark:bg-slate-900 dark:border-slate-50 dark:text-slate-50">
      <nav className="flex justify-center mx-auto">
        <div
          className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <Link to="/">
            <a className="ml-2 mr-2">Home</a>
          </Link>
        </div>

        <div
          className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <a className="ml-2 mr-2" href="https://www.linkedin.com/in/joshua-brunscheen/" target="_blank">Contact</a>
        </div>

        {/* <div
          className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-blue-500 before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
          <a className="ml-2 mr-2">Projects</a>
        </div> */}

        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="cursor-pointer bi bi-search mt-1 ml-2 mr-2 transition duration-500 ease-in-out hover:text-blue-500" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      
        <svg onClick={toggleTheme} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="cursor-pointer bi bi-circle-half mt-1 ml-2 mr-2 transition duration-500 ease-in-out hover:text-blue-500" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
        </svg>
      </nav>
    </header>
  )
}

export default Header