import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <About />
        <Projects />
        <ContactForm />
      </div>
    );
  }
}

export default App;
