import React from 'react'
import Projects from './projects'
import ReactDOM from 'react-dom'
import Timer from './timer'




export function Home(){

  function projectCollapse(){
      document.getElementById("ProjectArea").className="project_area_collapse"
      document.getElementById("introText").className="intro_text_hidden"
  }

  function mainPage() {
    const elementMain = (
      <div className="home_page">
        <section className="home_area">
          <article className="my_name_area">
            <h1 className="my_name">Jeremy Ward</h1>
                <marquee className="my_descriptions_right" direction="right">Developer                       Logic Coding                       Data Management </marquee>
          </article>
          <div className="project_area" id="ProjectArea" onClick={projectCollapse}>
            <div className="project_area1">
              <p className="intro_text" id="introText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <Timer start={Date.now()} />

        </section>
        <article className="projects_list">
          <Projects/>
        </article>
      </div>
    )
    ReactDOM.render(
      elementMain,
      document.getElementById("main")
    )
  }
  mainPage()
}


//<p className="intro_text" id="introText">I bring a long history of writing functional code to the world of web development and styling.  I focus on writing code which<span className="intro_text_italics">performs</span>, as well as looking good. </p>
