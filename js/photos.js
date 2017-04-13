import React from 'react'
import ReactDOM from 'react-dom'

function theIronYard(){
  window.open("https://www.theironyard.com/", '_blank')
}

export function Photos(){
  var element = (
    <section className="photos_page">
      <h1 className="the_iron_yard_title">My experience at:  </h1>
      <a className="the_iron_yard" onClick={theIronYard}>
        <img className="image_TIY" src="/styles/TIY.jpg"/>
      </a>
      <div>
        <p className="caption">In the beginning...</p>
        <img className="photos" src="/styles/1.jpg"/>
        <p className="caption">Holiday Season...</p>
        <img className="photos" src="/styles/2.jpg"/>
        <p className="caption">My Birthday...</p>
        <img className="photos" src="/styles/3.jpg"/>
        <p className="caption">End of Week 8...</p>
        <img className="photos" src="/styles/7.jpg"/>
        <p className="caption">Guest Speakers...</p>
        <img className="photos" src="/styles/5.jpg"/>
        <p className="caption">An exercise in communication...</p>
        <img className="photos" src="/styles/6.jpg"/>
        <p className="caption">An intense instruction session...</p>
        <img className="photos" src="/styles/8.jpg"/>
        <p className="caption">Demo Day..</p>
        <img className="photos" src="/styles/10.jpg"/>
        <p className="caption">Graduation!</p>
        <img className="photos" src="/styles/9.jpg"/>
        <img className="image_cert" src="/styles/cert.png"/>
      </div>
    </section>
  )
  return element
}
