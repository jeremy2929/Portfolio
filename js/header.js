import React from 'react'
import { Link } from 'react-router'
import ReactDOM from 'react-dom'
import {Home} from './home'
import {bio} from './aboutMe'

function onDropChange(e) {
  var path = e.target.value
  if (path != "Projects") {
    window.open(path, '_blank')
  }
}
function onClickGitHub() {
  window.open("https://github.com/jeremy2929", '_blank')
}
function hoverOnMyImage() {
  document.getElementById("myImage").className="myImageLarge"
}
function hoverOffMyImage() {
  document.getElementById("myImage").className="myImage"
}
function bioLink(){
  var element = bio()
  ReactDOM.render(
    element,
    document.getElementById("main")
  )
}
function homeLink(){
  Home()
}

//<a className="homeButton" href="#" onClick={Home()}>Home</a>

function render() {
  const elementHeader = (
    <header>
      <nav className="navBar">
          <div className="myInfoBox">
            <article className="myBox">
              <a href="#" onMouseEnter={hoverOnMyImage} onMouseLeave={hoverOffMyImage}>
                <img id ="myImage" className="myImage" src="/styles/jw.png" ></img>
                </a>
              <div className="name_Info">
                <h1 className = "myContactInfo">Cell: 210-459-6998</h1>
                <a className = "myContactInfo" href="mailto:jeremy2929@twc.com" data-rel="external">jeremy2929@twc.com</a><br />
              </div>
            </article>
          </div>
          <section className="navTopRight">
            <a className="homeButton" href="#" onClick={homeLink}>Home</a>
            <text  className="postsButton">Posts</text>
            <text  className="photosButton">Photos</text>
            <a className="photosButton" href="#" onClick={bioLink}>AboutMe</a>
            <a className="github_icon" href="#" onClick={onClickGitHub}>
              <i className="fa fa-github" aria-hidden="true"> GitHub</i>
            </a>
          </section>
      </nav>
    </header>
  )
  ReactDOM.render(
    elementHeader,
    document.getElementById("header")
  )
}
render()
