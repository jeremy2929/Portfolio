import React from 'react'
  // <iframe src="https://docs.google.com/viewer?srcid=1Xue_sTz8X8_VUg3kLlRrcy5Qhe7tBb3moFBZhDA7g5o&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="580px" height="480px"></iframe>
  // <img className="bio_star" src="/styles/texas-star.jpg"/>

export function Bio(){
  var element = (
    <div>
      <section className="bio_Section">
        <div className="bio_Background">
          <p className="bio_Text">   I am a native Texan, originally from Houston and also lived for a while in Rosenberg outside of Houston.  I came to San Antonio in 2008, indirectly because of Hurricane Ike. I have been writing code almost my entire life.  I have 10 years experience in Computer Operations of mainframes, Network Administration, and PICK BASIC programming.  I recently completed a 12 week intense bootcamp at the Iron Yard, studying HTML, CSS, and JavaScript. I enjoy logic-oriented and mathematical programming challenges, as well as reading, camping, road trips, motorcycling, windsurfing and sailing.</p>
          <img className="bio_image" src="/styles/tx.jpg"/>
        </div>
      </section>
    </div>
  )
  return element
}
