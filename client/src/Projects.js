import React, { Component } from 'react';
import './App.css';
import './projects.css';
import {Link} from 'react-router-dom';

class Projects extends Component{
  render(){
    return(
      <div>
      <div className="project-top-divider"></div>
      <h2 className="projects-header">Projects</h2>
        <div className="first-wrapper">
        <h1 className="header">Stoichiometry Calculator</h1>
          <img src={require('./methane.png')} className="equation-img" />
          <div className="project-text-wrapper">
            <p className="project-text">An app that solves stoichiometry problems on chemical equations. It also features login and registration and a user dashboard that displays the users solved equations. Built using MongoDB, Express, React, and Node.</p>
            <a href="https://blooming-mesa-54677.herokuapp.com/dashboard" className="visit-button">Visit App</a>
          </div>
        </div>
        <div className="first-wrapper">
        <h1 className="header">Two Truths and A Lie</h1>
          <img src={require('./hand.png')} className="hand-img" />
          <div className="project-text-wrapper">
            <p className="project-text">An app that allows users to play two truths and a lie featuring follows, comments, and likes. Built using MongoDB, Express, React, and Node.</p>
            <a href="https://agile-retreat-41591.herokuapp.com/" className="visit-button">Visit App</a>
          </div>
        </div>
        <div className="first-wrapper">
        <h1 className="header">ATNPR</h1>
          <img src={require('./logo-recropped.jpg')} className="atnpr-logo" />
          <div className="project-text-wrapper">
            <p className="project-text">Web app I made for a small business owner that includes a contact form and a blog with an admin section. Built using Python and Django</p>
            <a href="http://www.atnpr.com/" className="visit-button">Visit App</a>
          </div>
        </div>
        <div className="first-wrapper">
        <h1 className="header">Bookmarks App</h1>
          <img src={require('./bookmark.png')} className="atnpr-logo" />
          <div className="project-text-wrapper">
            <p className="project-text">Web app thata allows users to bookmark pages, rate the pages they bookmark, and filter by rating. The app uses a jquery store, not just jquery plugins. Built using html, css, and jquery.</p>
            <a href="https://thinkful-ei24.github.io/alec-bookmarks-app/" className="visit-button">Visit App</a>
          </div>
        </div>
          <div className="project-bottom-divider"></div>
      </div>
    );
  }
}
export default Projects;
