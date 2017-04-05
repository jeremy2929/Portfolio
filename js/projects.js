import React from 'react'
import { render } from 'react-dom'
import {Link} from 'react-router'
import ReactDom from 'react-dom';

// <div>
//   <section className="projectsArea">
//     <article className="cubeArea">
//       <div className="wrap"  >
//         <div className="cubeOut">
//           <div className="cube">
//             <h1 className="projectTitle">Project</h1>
//             <div className="front">
//               <p className="textFront">Sudoku Solver</p>
//               <img className="sudokuImageCube" src="styles/sudoku.jpg" onClick={this.sudoku}/>
//             </div>
//             <div className="back">
//               <p className="textBack">Chat App</p>
//               <img className="chatAppCube" src="styles/chat.jpg" onClick={this.chatApp}/>
//             </div>
//             <div className="top"></div>
//             <div className="bottom"></div>
//             <div className="left">
//               <p className="textLeft">Spurs Blog</p>
//               <img className="spursBlogImageCube" src="styles/SpursBlog.jpg" onClick={this.spursBlog}/>
//             </div>
//            <div className="right">
//              <p className="textLeft">Tic-Tac-Toe</p>
//              <img className="tic-tac-toeImageCube" src="styles/tic-tac-toe.jpg" onClick={this.tic_tac_toe}/>
//            </div>
//          </div>
//        </div>
//      </div>
//     </article>
//   </section>
// </div>



// export default React.createClass({
// render() {
//   return (


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
  var x = document.getElementsByClassName("my_projects");
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
    <div className="sudoku_area my_projects first_project">
       <p className="sudoku_title">Sudoku Solver</p>
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
        <article className="slide_button_area">
          <button className="slide_button_left" onClick={prevDivs}>&#10094;</button>
          <button className="slide_button_right" onClick={plusDivs}>&#10095;</button>
        </article>
    </div>
    <div className="tictactoe_area my_projects">
       <p className="sudoku_title">Not Sudoku Solver</p>
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
        <article className="slide_button_area">
          <button className="slide_button_left" onClick={prevDivs}>&#10094;</button>
          <button className="slide_button_right" onClick={plusDivs}>&#10095;</button>
        </article>
  </div>

   </div>
    )
  return element
}


// })



//
// var slideIndex = 1;
//
// function plusDivs() {
//   slideIndex++
//   if (slideIndex > 7){
//     slideIndex = 1
//   }
//   showDivs(slideIndex);
// }
//
// function prevDivs() {
//   slideIndex--
//   if (slideIndex > 7){
//     slideIndex = 1
//   }
//   showDivs(slideIndex);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }
//
// export function Photos() {
//    var element = (
//   <div>
//     <div className="">
//       <h1 className="theIronYardTitle">My experience at  </h1>
//             <a className="theIronYard" href="https://www.theironyard.com/">The Iron Yard:
//             </a>
//     </div>
//     <div className="">
//       <div className="mySlides first_photo fade" id="image">
//         <img className="slide_image" src="/styles/TIY.jpg" />
//         <div className="caption1">
//           Trolltunga, Norway
//         </div>
//       </div>
//         <div className="mySlides fade" id="image">
//         <img className="slide_image" src="/styles/cert.png" />
//         <div className="caption1">
//           Trolltunga, Norway
//         </div>
//       </div>
//     <div className="mySlides fade" id="image">
//       <img className="slide_image" src="styles/1.jpg" />
//       <div className="caption1">
//         Trolltunga, Norway
//       </div>
//     </div>
//
//     <div className="mySlides fade" id="image">
//       <img className="slide_image" src="styles/2.jpg" />
//       <div className="caption1">
//         Northern Lights, Norway
//       </div>
//     </div>
//
//     <div className="mySlides fade" id="image">
//       <img className="slide_image" src="styles/3.jpg" />
//       <div className="caption1">
//         Beautiful Mountains
//       </div>
//     </div>
//
//     <div className="mySlides fade" id="image">
//       <img className="slide_image" src="styles/4.jpg" />
//       <div className="caption1">
//         The Rain Forest
//       </div>
//     </div>
//
//     <div className="mySlides fade" id="image">
//       <img className="slide_image" src="styles/5.jpg" />
//       <div className="caption1">
//         Mountains!
//       </div>
//     </div>
//
//     <button className="w3-button w3-display-left w3-black" onClick={prevDivs}>&#10094;</button>
//     <button className="w3-button w3-display-right w3-black" onClick={plusDivs}>&#10095;</button>
//
//     </div>
//   </div>
// )
//  return element
// }
