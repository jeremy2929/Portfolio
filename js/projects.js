import React from 'react'
import {render} from 'react-dom'
import {Link} from 'react-router'
import ReactDom from 'react-dom';

function sudokuApp(){
  window.open("https://sudoku-puzzle-sa.herokuapp.com", '_blank')
}

function sudokuCode(){
  window.open("https://github.com/jeremy2929/Sudoku-Solver", '_blank')
}

function dollartrakCode(){
  window.open("https://github.com/jeremy2929/DollarTrak", '_blank')
}

function spursblogApp(){
  window.open("https://spurs-project.herokuapp.com/", '_blank')
}

function spursblogCode(){
  window.open("https://github.com/jeremy2929/SpursBlog", '_blank')
}

function tictactoeApp(){
  window.open("https://tic-tac-toe-jw.herokuapp.com/", '_blank')
}

function tictactoeCode(){
  window.open("https://github.com/jeremy2929/tic-tac-toe-jw", '_blank')
}

var slideIndex = 1;
function plusDivs() {
  slideIndex++
  if (slideIndex > 7){
    slideIndex = 1
  }
  showDivs(slideIndex);
}
function prevDivs() {
  slideIndex--
  if (slideIndex > 7){
    slideIndex = 1
  }
  showDivs(slideIndex);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("project_area");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "inline-block";
}

export function Projects() {
  var element = (
  <div>
    <div className="project_area first_project">
      <section className="fade">
      <h1 className="tictactoe_title">Tic-Tac-Toe</h1>
      <img className="tictactoe_image" src="styles/tic-tac-toe.jpg" />
        <aside className="tictactoe_description">
          <p className="tictactoe_text">
          Week 4: A functional Tic-Tac-Toe game in vanilla javascript for which I developed the logic myself.
          </p>
          <div className="tictactoe_buttons">
            <button className="tictactoe_app_button" onClick={tictactoeApp}>Run App</button>
            <button className="tictactoe_code_button" onClick={tictactoeCode}>View Code</button>
          </div>
        </aside>
      <article className="slide_button_area">
        <button className="slide_button_left" onClick={prevDivs}>&#8678; PREV</button>
        <button className="slide_button_right" onClick={plusDivs}>NEXT &#8680;</button>
      </article>
    </section>
    </div>
    <div className="project_area">
      <section className="fade">
      <h1 className="spursblog_title">Spurs Blog Team Project</h1>
      <img className="project_image" src="styles/SpursBlog.jpg" />
        <aside className="spurs_blog_description">
          <p className="spursblog_text">
            Week 6: A four member team project on a given school assignment - All about the Spurs blog site.
          </p>
          <div className="spursblog_buttons">
            <button className="spursblog_app_button" onClick={spursblogApp}>Run App</button>
            <button className="spursblog_code_button"onClick={spursblogCode}>View Code</button>
          </div>
        </aside>
      <article className="slide_button_area">
        <button className="slide_button_left" onClick={prevDivs}>&#8678; PREV</button>
        <button className="slide_button_right" onClick={plusDivs}>NEXT &#8680;</button>
      </article>
    </section>
    </div>
    <div className="project_area">
      <section className="fade">
       <h1 className="dollartrak_title">DollarTrak Budget App</h1>
       <img className="project_image" src="styles/DollarTrak.jpg" />
       <aside className="dollartrak_description">
         <p className="dollartrak_text">
           Week 13: A Budget App using React- full of functionality, storing data externally into Firebase, which I plan to re-factor into a more organized version with improved styling.
         </p>
         <h2 className="play_dollartrak_movie">Watch Demo of DollarTrak here:</h2>
         <video className="dollartrak_video" src="styles/dollartrak.mov" controls="controls">
         </video>
         <button className="dollartrak_code_button"onClick={dollartrakCode}>View Code</button>
       </aside>
       <article className="slide_button_area">
         <button className="slide_button_left" onClick={prevDivs}>&#8678; PREV</button>
         <button className="slide_button_right" onClick={plusDivs}>NEXT &#8680;</button>
       </article>
     </section>
    </div>
    <div className="project_area">
      <section className="fade">
       <h1 className="sudoku_title">Sudoku Puzzle Solver</h1>
         <div className="wrap"  >
           <div className="cube">
             <div className="top"></div>
             <div className="front">
               <img className="sudoku_image_cube" src="styles/sudoku_solved.jpg"/>
             </div>
             <div className="back">
               <img className="sudoku_image_cube" src="styles/sudoku_solved.jpg"/>
             </div>
              <div className="right">
               <img className="sudoku_image_cube" src="styles/sudoku_puzzle.jpg"/>
             </div>
             <div className="left">
               <img className="sudoku_image_cube" src="styles/sudoku_puzzle.jpg"/>
             </div>
             <div className="bottom"></div>
          </div>
        </div>
        <aside className="sudoku_description">
          <p className="sudoku_text">
            Post-graduation:  Another student and I tackled this project to refine our skills regarding using a project manager to define our tasks needed to obtain MVP, to practice using GitHub more efficiently by creating branches of new development and then merging them into the master code, and to create separate modules for different parts of the code required to create the app.
          </p>
          <button className="sudoku_app_button" onClick={sudokuApp}>Run App</button>
          <button className="sudoku_code_button"onClick={sudokuCode}>View Code</button>
          </aside>
        <article className="slide_button_area">
          <button className="slide_button_left" onClick={prevDivs}>&#8678; PREV</button>
          <button className="slide_button_right" onClick={plusDivs}>NEXT &#8680;</button>
        </article>
      </section>
    </div>
   </div>
    )
  return element
}
