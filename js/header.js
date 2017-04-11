import React from 'react'
import ReactDOM from 'react-dom'
import {Home} from './home'
import {Projects} from './projects'
import {Bio} from './aboutMe'
import {Photos} from './photos'
import {Posts} from './posts'


// <a className="github_icon" href="#" onClick={onClickGitHub}>
//   <i className="fa fa-github github_button" aria-hidden="true"> GitHub</i>
// </a>
function onClickGitHub() {
  window.open("https://github.com/jeremy2929", '_blank')
}

function hoverOnMyImage() {
  document.getElementById("myImage").className="myImageLarge"
}

function hoverOffMyImage() {
  document.getElementById("myImage").className="myImage"
}

function projects(){
  var element = Projects()
  ReactDOM.render(
    element,
    document.getElementById("main")
  )
}

function postsLink(){
  var element = Posts()
  ReactDOM.render(
    element,
    document.getElementById("main")
  )
}

function photosLink(){
  var element = Photos()
  ReactDOM.render(
    element,
    document.getElementById("main")
  )
}

function bioLink(){
  var element = Bio()
  ReactDOM.render(
    element,
    document.getElementById("main")
  )
}
function homeLink(){
  Home()
}

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
            <a className="navButton" href="#" onClick={homeLink}>Home</a>
            <a className="navButton" href="#" onClick={projects}>Projects</a>
            <a className="navButton" href="#" onClick={postsLink}>Posts</a>
            <a className="navButton" href="#" onClick={photosLink}>Photos</a>
            <a className="navButton" href="#" onClick={bioLink}>AboutMe</a>
            <a className="navButton" href="#" onClick={onClickGitHub}>GitHub</a>
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
