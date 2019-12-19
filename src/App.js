import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home'
import NewSeries from './newSeries'
import EditSeries from './editSeries'
import NavBar from './navBar'
import Series from './Series'

const About = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route path='/series-edit/:id' component={EditSeries} />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/new' component={NewSeries} />
          <Route path='/series/:genre' component={Series} />
        </div>
      </Router>
    )
  }

}

export default App
