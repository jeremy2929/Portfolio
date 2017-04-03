import React from 'react'

function scrollUp(){
  window.scroll(0, 0)
}

export function Posts() {
  var element = (
    <section className="postsSection">
      <h1 className="postsTextTitle">I collect various quotes and sayings as I encounter them:</h1>
      <ol>
        <li className="postsText">1.  The past is a construct of the mind.  It blinds us and fools us into believing it.  But the heart wants to live in the present.</li>
        <li className="postsText">2.  Learning is the continuous discovery of your own ignorance.</li>
        <li className="postsText">3.  Life breaks all of us, but the strong get stronger in the broken places.</li>
        <li className="postsText">4.  Voluntary change usually only occurs when the pain of remaining the same exceeds the fear of change.</li>
        <li className="postsText">6.  The secret to happiness is something to do, something to hope for, and something to love.</li>
        <li className="postsText">7. If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.</li>
        <li className="postsText">8. Willful ignorance is a liberty, but coupled with a strong opinion, it's a mistake.</li>
        <li className="postsText">9. Use your fear. It can take you to a place where your courage is stored.</li>
        <li className="postsText">10. If there is something worthy you want, it's not something you can accomplish in one day.  It doesn't matter your pace, and it doesn't matter your strengths or weaknesses, as long as you keep pushing forward, you are achieving something.</li>
        <li className="postsText">11. There are no limits. There are only plateaus, and you must not stay there.  You must go beyond them.</li>
        <li className="postsText">12. The easiest way isn't usually the cheapest way, the cheapest way isn't usually the best way, and the best way usually isn't the easiest way.</li>
        <li className="postsText">13. If a man is called to be a street sweeper, he should sweep streets even as a Michaelangelo painted, or Beethoven composed music or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, 'Here lived a great street sweeper who did his job well.'</li>
      </ol>
      <button className="topButton" onClick={scrollUp}>Top of Page</button>
   </section>
  )
  return element
}
