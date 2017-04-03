import React from 'react'
import {Link} from 'react-router'
import Projects from './projects'
import ReactDOM from 'react-dom'

export function Home(){
  var skills = ["","HTML","CSS","JavaScript","React","Node.js","NPM","Webpack","GitHub","Firebase"]
  var counter = 0
  var TimerExample = React.createClass({
      getInitialState: function(){
          // This is called before our render function. The object that is
          // returned is assigned to this.state, so we can use it later.
          return {elapsed: 0}
      },
      componentDidMount: function(){
        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:
        this.timer = setInterval(this.tick, 2000);
      },
      componentWillUnmount: function(){
        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:
        clearInterval(this.timer);
      },
      tick: function(){
        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered
        this.setState({elapsed: new Date() - this.props.start});
      },
      render: function() {
        var elapsed = Math.round(this.state.elapsed / 100);
        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);
        var intSeconds = (elapsed / 10).toFixed(0)
        if (intSeconds%2 === 0 && intSeconds > 1){
          counter++
          if(counter > 8){
            counter = 1
          }
        }
        return (
          <div className="skills_area">
              <h1 className="skills_text">{skills[counter]}</h1>
        </div>
        )
      }
  })

function projectCollapse(){
    document.getElementById("ProjectArea").className="project_area_collapse"
    document.getElementById("introText").className="intro_text_hidden"
}

  function mainPage() {
    const elementMain = (
      <div>
        <section className="home_area">
          <article className="my_name_area">
            <h1 className="my_name">Jeremy Ward</h1>
                <marquee className="my_descriptions_right" direction="right">Developer                       Logic Coding                       Data Management </marquee>
          </article>
          <div className="project_area" id="ProjectArea" onClick={projectCollapse}>
            <div className="project_area1">
              <p className="intro_text" id="introText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <TimerExample start={Date.now()} />
          <article className="projects_list">
            <Projects/>
          </article>
        </section>
      </div>
    )
    ReactDOM.render(
      elementMain,
      document.getElementById("main")
    )
  }
  mainPage()
}
