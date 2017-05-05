import React from 'react'
import { Link } from 'react-router'
import Header from './header'
import Footer from './footer'
var createReactClass = require("create-react-class")


export default createReactClass({
  render() {
    return (
      <section>
        <Header />
        { this.props.children }
        <Footer />
      </section>
    )
  }
})
