import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import {Home} from './home'
import Header from './header'
import Blog from './blog'
import aboutMe from './aboutMe'
import Photos from './photos'
//<Route path="/" component={Home}/>
//Header()
Home()

// render(
//   (
//     <Router history={hashHistory}>
//       <Route component={App}>
//         <Route path="/Blog" component={Blog}/>
//         <Route path="/Photos" component={Photos}/>
//         <Route path="/aboutMe" component={aboutMe}/>
//       </Route>
//     </Router>
//   ),
//   document.getElementById('header')
// )



// //
// // render(
// //   (
// //     <Router history={hashHistory}>
// //       <Route component={App}>
// //         <Route path="/" component={Home}/>
// //       </Route>
// //     </Router>
// //   ),
// //   document.getElementById('main')
// )
