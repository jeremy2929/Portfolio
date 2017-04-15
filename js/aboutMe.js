import React from 'react'

export function Bio(){
  var element = (
    <div>
      <section className="bio_section">
        <div className="bio_background">
          <p className="bio_text">   I am a native Texan, originally from Houston and also lived for a while in Rosenberg outside of Houston.  I came to San Antonio in 2008, indirectly because of Hurricane Ike. I have been writing code almost my entire life.  I have 10 years experience in Computer Operations of mainframes, Network Administration, and PICK BASIC programming.  I recently completed a 12 week intense bootcamp at the Iron Yard, studying HTML, CSS, and JavaScript. I enjoy logic-oriented and mathematical programming challenges, as well as reading, camping, road trips, motorcycling, windsurfing and sailing.</p>
          <img className="bio_star" src="/styles/tx.jpg"/>
        </div>
      </section>
    </div>
  )
  return element
}
