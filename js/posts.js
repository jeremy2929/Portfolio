import React from 'react'

function scrollUp(){
  window.scroll(0, 0)
}

export function Posts() {
  var element = (
    <section className="posts_section">
      <h1 className="posts_text_title">I collect various quotes and sayings as I encounter them:</h1>
      <br/>
      <ol>
        <li className="posts_text">The past is a construct of the mind.  It blinds us and fools us into believing it.  But the heart wants to live in the present.</li>
        <br/>
        <li className="posts_text">Learning is the continuous discovery of your own ignorance.</li>
        <br/>
        <li className="posts_text">Life breaks all of us, but the strong get stronger in the broken places.</li>
        <br/>
        <li className="posts_text">Voluntary change usually only occurs when the pain of remaining the same exceeds the fear of change.</li>
        <br/>
        <li className="posts_text">If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.</li>
        <br/>
        <li className="posts_text">Willful ignorance is a liberty, but coupled with a strong opinion, it's a mistake.</li>
        <br/>
        <li className="posts_text">Use your fear. It can take you to a place where your courage is stored.</li>
        <br/>
        <li className="posts_text">If there is something worthy you want, it's not something you can accomplish in one day.  It doesn't matter your pace, and it doesn't matter your strengths or weaknesses, as long as you keep pushing forward, you are achieving something.</li>
        <br/>
        <li className="posts_text">There are no limits. There are only plateaus, and you must not stay there.  You must go beyond them.</li>
        <br/>
        <li className="posts_text">The easiest way isn't usually the cheapest way, the cheapest way isn't usually the best way, and the best way usually isn't the easiest way.</li>
        <br/>
        <li className="posts_text">If a man is called to be a street sweeper, he should sweep streets even as a Michaelangelo painted, or Beethoven composed music or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, 'Here lived a great street sweeper who did his job well.'</li>
        <br/>
        <li className="posts_text">The secret to happiness is something to do, something to hope for, and something to love.</li>
      </ol>
    <button className="top_button" onClick={scrollUp}>Top of Page</button>
   </section>
  )
  return element
}
