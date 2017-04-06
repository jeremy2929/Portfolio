import React from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import ReactDom from 'react-dom';


  // sudoku() {
  //   window.open("https://sudoku-puzzle-sa.herokuapp.com", '_blank')
  // },
  // spursBlog() {
  //   window.open("https://spurs-project.herokuapp.com", '_blank')
  // },
  // tic_tac_toe() {
  //   window.open("https://tic-tac-toe-jw.herokuapp.com", '_blank')
  // },
  // chatApp() {
  //   window.open("https://chat-app-jw.herokuapp.com/", '_blank')
  // },

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
//<h1 className="tictactoe_title">Tic Tac Toe</h1>

export function Projects() {
  var element = (
  <div>
    <div className="project_area first_project">
      <section className="fade">
       <h1 className="sudoku_title">Sudoku Puzzle Solver</h1>
         <div className="wrap"  >
           <div className="cube">
             <div className="top"></div>
             <div className="front">
               <img className="sudokuImageCube" src="styles/sudoku_solved.jpg"/>
             </div>
             <div className="back">
               <img className="sudokuImageCube" src="styles/sudoku_solved.jpg"/>
             </div>
              <div className="right">
               <img className="sudokuImageCube" src="styles/sudoku_puzzle.jpg"/>
             </div>
             <div className="left">
               <img className="sudokuImageCube" src="styles/sudoku_puzzle.jpg"/>
             </div>
             <div className="bottom"></div>
          </div>
        </div>
        <aside className="sudoku_description">
          <p className="sudoku_text">
            This app allows you to enter a Sudoku puzzle and then click Solve button to have the app solve the puzzle.  It will display an error message if a bad puzzle has been entered.  To enter a puzzle, click on each box and type in the number.  The method used to solve is methodical brute force.
          </p>
        </aside>
        <article className="slide_button_area">
          <button className="slide_button_left" onClick={prevDivs}>&#8678;PREV</button>
          <button className="slide_button_right" onClick={plusDivs}>NEXT&#8680;</button>
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
       </aside> <article className="slide_button_area">
         <button className="slide_button_left" onClick={prevDivs}>&#8678;PREV</button>
         <button className="slide_button_right" onClick={plusDivs}>NEXT&#8680;</button>
       </article>
     </section>
  </div>
  <div className="project_area">
    <section className="fade">
    <h1 className="spurs_blog_title">Spurs Blog Team Project</h1>
    <img className="project_image" src="styles/SpursBlog.jpg" />
      <aside className="spurs_blog_description">
        <p className="spurs_blog_text">
          Week 6: A four member team project on a given school assignment - All about the Spurs blog site.
        </p>
      </aside>
    <article className="slide_button_area">
      <button className="slide_button_left" onClick={prevDivs}>&#8678;PREV</button>
      <button className="slide_button_right" onClick={plusDivs}>NEXT&#8680;</button>
    </article>
  </section>
  </div>
  <div className="project_area">
    <section className="fade">
    <img className="tictactoe_image" src="styles/tic-tac-toe.jpg" />
      <aside className="tictactoe_description">
        <p className="tictactoe_text">
        Week 4: A functional Tic-Tac-Toe game in vanilla javascript for which I developed the logic myself.
        </p>
      </aside>
    <article className="slide_button_area">
      <button className="slide_button_left" onClick={prevDivs}>&#8678;PREV</button>
      <button className="slide_button_right" onClick={plusDivs}>NEXT&#8680;</button>
    </article>
  </section>
  </div>
   </div>
    )
  return element
}
