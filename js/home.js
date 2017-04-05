import React from 'react'
import {Projects} from './projects'
import ReactDOM from 'react-dom'
import Timer from './timer'

// import * as myModule from 'my-module'



export function Home(){

  

  function projectCollapse(){
      document.getElementById("IntroArea").className="intro_area_collapse"
      document.getElementById("introText").className="intro_text_hidden"
  }

  function mainPage() {
    const elementMain = (
      <div className="home_page">
          <article className="my_name_area">
            <h1 className="my_name">Jeremy Ward</h1>
                <marquee className="my_descriptions_right" direction="right">Developer                       Logic Coding                       Data Management </marquee>
          </article>
          <div className="intro_area" id="IntroArea" onClick={projectCollapse}>
              <p className="intro_text" id="introText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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


// <Projects/>



//<p className="intro_text" id="introText">I bring a long history of writing functional code to the world of web development and styling.  I focus on writing code which<span className="intro_text_italics">performs</span>, as well as looking good. </p>
