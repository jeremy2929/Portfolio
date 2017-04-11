import React from 'react'
import {Projects} from './projects'
import ReactDOM from 'react-dom'
import Timer from './timer'

    // <marquee className="my_descriptions_right" direction="right">Developer                       Logic Coding                       Data Management </marquee>
export function Home(){
  function projects(){
    var element = Projects()
    ReactDOM.render(
      element,
      document.getElementById("main")
    )
  }
  function mainPage() {
    const elementMain = (
      <div className="home_page">
        <article className="my_name_area">
          <h1 className="my_name">Jeremy Ward</h1>
        </article>
        <div className="intro_area" id="IntroArea" style={{display: "inline-block"}}>
          <p className="intro_text" id="introText">I began learning web development at The Iron Yard in late November of 2016.  I've been writing code most of my life but HTML, CSS, and JavaScript was new to me.  This site illustrates the progress of my learning through the 12 week boot camp at The Iron Yard, as well as post graduation projects and development of my skills.  These four projects chronicle my learning through the weeks from beginning to present.  I have plans to improve and further develop everything seen here, as well as beginning new projects to learn new methods of coding.</p>
        <button className="projects_button" href="#" onClick={projects}>Projects</button>
        </div>
        <Timer start={Date.now()} />
      </div>
    )
    ReactDOM.render(
      elementMain,
      document.getElementById("main")
    )
  }
  mainPage()
}
