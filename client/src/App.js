import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Cards from './Cards';
import Projects from './Projects';
import ContactForm from './ContactForm';
import ReactRain from 'react-rain-animation';
// import all the styles
import "react-rain-animation/lib/style.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      isHidden: false
    }
  }
    toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    let buttonText;
    if(this.state.isHidden === false){
      buttonText = "Stop the Rain!"
    } else {
      buttonText = "Make it Rain!"
    }
    return (
      <div className="App">
        <div>
          <div className="nav-divider"></div>
          <div className="topnav">
            <div>
            <span className="topnav-name">Alec Livinghouse</span>
          <button onClick={this.toggleHidden.bind(this)} className="rain-button">
            {buttonText}
          </button>
          </div>
          </div>

          <div className="rain-wrapper">
            {!this.state.isHidden && <ReactRain
              numDrops="100"
            />}
            {this.state.isHidden && <ReactRain
              numDrops="0"
            />}
          </div>
        </div>
        <About />
        <Cards />
        <Projects />
        <ContactForm />
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
