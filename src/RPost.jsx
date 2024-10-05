import { useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import ImgCap from './ImgCap.jsx'
import Footer from './Footer.jsx'

function RPost() {

  return (
    <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900 ">
        <Header />
        <div className="w-3/4 m-auto">
          <div className="transition-all duration-500 w-fit h-fit bg-blue-500">
            <h1 className="mt-10 transition-all duration-500 text-left text-8xl text-slate-900 dark:text-slate-50"><b>RPost</b></h1>
          </div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl"><b>Languages and Platforms: HTML, CSS, JS, PHP, MySQL, Figma</b></h2>

          <div className="mt-10 transition-all duration-500 w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">In a group of four other students, developed a campus social media web application. RPost has a variety of features including a live stream of campus events on a calendar, an AI chatbot, and direct messaging on top of usual social media features (posting, liking, and following). </h2>

          <ImgCap url="/rpost/RPostOverview.png" caption="Brief overview of the main page and feed (some info redacted for basic privacy of developers)" />

          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Using <a href="https://events.rpi.edu/cal/main/showEventList.rdo;jsessionid=m3sGbTySzUKCrTGuTm0EiOER2iJw4tG8HleYWGfN.bedework2" className="text-blue-500 underline">RPI's own events widgit</a>, I was able to integrate a live feed of upcoming events at RPI. Using some styling, I was able to present this data in RPost's style and color scheme. This feature is shown on the top right hand side of the image above.</h2>

          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">In addition to the upcoming events feature, I was also in charge of designing and constructing the DM feature in the bottom right corner. This required me to integrate some basic privacy. Specifically, using some PHP and SQL, I had to check if users were following each other before they could see messages from each other. My team and I felt that this was an appropriate way to handle unwanted messages. </h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">
            I also worked on the design of the DMs. We wanted this section to be familiar to users and followed a format similar to texting on a phone.
          </h2>

          <ImgCap url="/rpost/RPostMessages.png" caption="RPost DM feature (some names redacted for privacy)." />
          <ImgCap url="/rpost/RPostChats.png" caption="RPost messaging display." />

          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">
            Finally, I would like to mention that I also designed and chose the color theme for this group project using Figma. 
          </h2>
          
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default RPost
