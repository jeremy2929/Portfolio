import React from 'react'
import ReactDOM from 'react-dom'

function theIronYard(){
  window.open("https://www.theironyard.com/", '_blank')
}

export function Photos(){
  var element = (
    <section className="photosPage">
      <h1 className="theIronYardTitle">My experience at:  </h1>
      <a className="theIronYard" onClick={theIronYard}>
        <img className="imageTIY" src="/styles/TIY.jpg"/>
      </a>
      <div>
        <p className="caption1">In the beginning...</p>
        <img className="photos" src="/styles/1.jpg"/>
        <p className="caption1">Holiday Season...</p>
        <img className="photos" src="/styles/2.jpg"/>
        <p className="caption1">My Birthday...</p>
        <img className="photos" src="/styles/3.jpg"/>
        <p className="caption1">End of Week 8...</p>
        <img className="photos" src="/styles/7.jpg"/>
        <p className="caption1">Guest Speakers...</p>
        <img className="photos" src="/styles/5.jpg"/>
        <p className="caption1">An exercise in communication...</p>
        <img className="photos" src="/styles/6.jpg"/>
        <p className="caption1">An intense instruction session...</p>
        <img className="photos" src="/styles/8.jpg"/>
        <p className="caption1">Demo Day..</p>
        <img className="photos" src="/styles/10.jpg"/>
        <p className="caption1">Graduation!</p>
        <img className="photos" src="/styles/9.jpg"/>
        <img className="imageCert" src="/styles/cert.png"/>
      </div>
    </section>
  )
  return element
}
