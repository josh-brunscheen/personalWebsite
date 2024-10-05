import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function DistanceField() {

  return (
    <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900 ">
        <Header />
        <div className="w-3/4 m-auto">
          <div className="transition-all duration-500 w-fit h-fit bg-blue-500">
            <h1 className="mt-10 transition-all duration-500 text-left sm:text-8xl text-4xl text-slate-900 dark:text-slate-50"><b>Distance Field Calculator</b></h1>
          </div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl"><b>Languages and Platforms: C++</b></h2>

          <div className="mt-10 transition-all duration-500 w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Developed a distance field calculator for Data Structures class.</h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">The program, given a black and white image, calculates the distance field around the black pixels. The smallest distance a white pixel is from a black pixel determines its field color. This project required 3 different algorithms: brute force, a slightly more optimized brute force, and the fast marching method.</h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">The bulk of this project taught me the importance of the approach to a complex and computationally expensive problem. I tested first hand the run times for each of the listed algorithms to prove why the fast marching method is faster.</h2>
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default DistanceField
