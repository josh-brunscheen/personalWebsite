import { useEffect } from 'react'
import './App.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ImgCap from './ImgCap.jsx'

function Raytracer() {

  return (
    <div className="transition-all duration-500 bg-slate-50 dark:bg-slate-900 ">
        <Header />

        {/* Article Div */}
        <div className="w-3/4 m-auto">
          <div className="transition-all duration-500 w-fit h-fit bg-sky-600">
            <h1 className="mt-10 transition-all duration-500 text-left sm:text-8xl text-4xl text-slate-900 dark:text-slate-50"><b>Graphics Raytracer</b></h1>
          </div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl"><b>Languages and Platforms: C++</b></h2>
          <h2 className="mt-10 transition-all duration-500 text-left text-sky-600 text-xl underline"><b>GitHub Repo: <a href="https://github.com/josh-brunscheen/raytracing">https://github.com/josh-brunscheen/raytracing</a></b></h2>


          <div className="mt-10 transition-all duration-500 w-full h-[2px] bg-slate-900 dark:bg-slate-50"></div>
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">Constructed a C++ raytracer under the guidance of <a href="https://raytracing.github.io/books/RayTracingInOneWeekend.html">
              <cite>Ray Tracing in One Weekend</cite>
          </a>. That being said, I cannot take full credit for this project, as it heavily follows the tutorial from the book. However, I did develop my own addition to this project.</h2>
        
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">After finishing the tutorial, I decided to add a 3D math function visualizer to the project. Simply provide an x and y span (similar to defining a width an height) and then supply a defined function for the z output.
            My implementation will generate a grid of spheres according to the provided function (e.g a 3D sine wave). One can supply any color or material for the spheres, or even apply a gradient color effect. Grids can be overlayed or can cross each other. 
          </h2>

          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">
            Below I have some pictures that I generated with this project. The pictures go in order of development. The first couple of pictures are from first starting out this project, and the later pictures are from more recent developments.
          </h2>

          <ImgCap url="raytracer/raytracer1.png" caption="First sphere"></ImgCap>
          <ImgCap url="raytracer/raytracer2.png" caption="Playing with gradients, background, and foreground."></ImgCap>
          <ImgCap url="raytracer/raytracer3.png" caption="Pre antialiasing (rough borders)"></ImgCap>
          <ImgCap url="raytracer/raytracer4.png" caption="Post antialiasing (smoothening out borders)"></ImgCap>
          <ImgCap url="raytracer/raytracer5.png" caption="Working with shadows"></ImgCap>
          <ImgCap url="raytracer/raytracer6.png" caption="Messing around with multiple materials and reflective surfaces"></ImgCap>
          <ImgCap url="FINAL_SCENE.png" caption="Personal results from final scene in book tutorial"></ImgCap>
          
          <h2 className="mt-10 transition-all duration-500 text-left text-slate-900 dark:text-slate-50 text-xl">
            Images from this point forward are from my own additions; I did not follow any tutorial while developing this package. 
          </h2>

          <ImgCap url="raytracer/raytracer7.png" caption="Initial test for 3D math function visualizer. Focused on being able to get the balls in frame correctly."></ImgCap>
          <ImgCap url="raytracer/coolMetalBalls.png" caption="More polished test with more spheres, a reflective material, and a color gradient."></ImgCap>
          
        </div>
        <Footer />
    </div>
  )
}

export default Raytracer
