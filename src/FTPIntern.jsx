import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function FTPIntern() {

  return (
    <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900 ">
        <Header />
        <div className="w-3/4 m-auto">
          <div className="transition-all duration-500 w-fit h-fit bg-blue-500">
            <h1 className="mt-10 transition-all duration-500 text-left sm:text-8xl text-4xl text-slate-900 dark:text-slate-50"><b>FTP Internship</b></h1>
          </div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl"><b>Languages and Platforms: Delphi, In-House Database and Version Control, Fluent SQL</b></h2>

          <div className="mt-10 transition-all duration-500 w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Worked within the UIT Trading software department at First Trust Portfolios in the summer of 2024.</h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Assigned to work on a feature that allowed employees at First Trust Portfolios to group brokers within First Trust Portfolios database. Previously, database managers had to be contacted to achieve this task, but my new feature removed that unnecessary task ultimately saving time for employees and money for the company. </h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Over the course of the summer, I was trained on the company's in-house tech stack including anything from version control to business objects to fluent SQL and more. Although training lasted the entirety of the internship length, the content was self pace accesible. Therefore, I became accustomed within 2 weeks on my own time.</h2>
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default FTPIntern
