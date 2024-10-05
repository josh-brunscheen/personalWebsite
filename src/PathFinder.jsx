import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function PathFinder() {

  return (
    <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900 ">
        <Header />
        <div className="w-3/4 m-auto">
          <div className="transition-all duration-500 w-fit h-fit bg-blue-500">
            <h1 className="mt-10 transition-all duration-500 text-left text-8xl text-slate-900 dark:text-slate-50"><b>Graph ADT and Path Finder</b></h1>
          </div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl"><b>Languages and Platforms: Java, JUnit, Eclipse</b></h2>

          <div className="mt-10 transition-all duration-500 w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Deisgned and created a graph ADT in java as well as a path finder using BFS and Djikstra's Algorithm.</h2>

          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">
            Given a variety of data sets, tested my implementation to ensure my code was efficient and accurate. I also tested against LEGO's brick and set data set. 
          </h2>
        </div>
        
        <Footer />
    </div>
  )
}

export default PathFinder
