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
export default React.createClass({
  sudoku() {
    window.open("https://sudoku-puzzle-sa.herokuapp.com", '_blank')
  },
  spursBlog() {
    window.open("https://spurs-project.herokuapp.com", '_blank')
  },
  tic_tac_toe() {
    window.open("https://tic-tac-toe-jw.herokuapp.com", '_blank')
  },
  chatApp() {
    window.open("https://chat-app-jw.herokuapp.com/", '_blank')
  },
  render() {
    return (
        <section className="projects_list">
              <div className="sudoku_area">
                         <p className="sudoku_title">Sudoku Solver</p>
                         <img className="sudoku_image" src="styles/sudoku.jpg" onClick={this.sudoku}/>
              </div>
        </section>
    )
  }
})
