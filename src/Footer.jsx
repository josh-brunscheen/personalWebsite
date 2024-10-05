import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-center mt-10 mx-auto transition-all duration-500 w-100% text-slate-900 border-2 border-b-0 border-l-0 border-r-0 border-slate-900 p-3 bg-slate-50 dark:bg-slate-900 dark:border-slate-50 dark:text-slate-50">
      <h2>Developed by Joshua Brunscheen in 2024 - Icons from Bootstrap</h2>
    </footer>
  )
}

export default Footer