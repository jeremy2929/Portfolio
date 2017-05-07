import React from 'react'
import ReactDOM from 'react-dom'
import {Home} from './home'
import {Projects} from './projects'
import {Bio} from './aboutMe'
import {Photos} from './photos'
import {Posts} from './posts'

function onClickGitHub() {
  window.open("https://github.com/jeremy2929", '_blank')
}

function hoverOnMyImage() {
  document.getElementById("myImage").className="my_image_large"
}

function hoverOffMyImage() {
  document.getElementById("myImage").className="my_image"
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
      <nav className="nav_bar">
        <article className="my_box">
          <a href="#" onMouseEnter={hoverOnMyImage} onMouseLeave={hoverOffMyImage}>
            <img id ="myImage" className="my_image" src="/styles/jw.png"></img>
            </a>
          <div className="name_info">
            <h1 className = "my_contact_info">Cell: 210-459-6998</h1>
            <a className = "my_contact_info" href="mailto:jeremy2929@twc.com" data-rel="external">jeremy2929@twc.com</a><br />
          </div>
        </article>
        <section className="nav_top_right">
          <a className="nav_button" href="#" onClick={homeLink}>Home</a>
          <a className="nav_button" href="#" onClick={projects}>Projects</a>
          <a className="nav_button" href="#" onClick={postsLink}>Posts</a>
          <a className="nav_button" href="#" onClick={photosLink}>Photos</a>
          <a className="nav_button" href="#" onClick={bioLink}>AboutMe</a>
          <a className="github_icon" href="#" onClick={onClickGitHub}>
            <i className="fa fa-github github_button" aria-hidden="true"> GitHub</i>
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
