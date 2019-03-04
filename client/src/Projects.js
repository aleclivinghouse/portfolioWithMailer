import React, { Component } from 'react';
import './App.css';
import './projects.css';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Projects extends Component{
  constructor(props){
  super(props);
  this.state = {
   image: '../stoichiometry-screen.png',
   modalIsOpen: false
  }
  this.closeModal = this.closeModal.bind(this);
  this.openModal = this.openModal.bind(this);
  this.onFireOne = this.onFireOne.bind(this);
  this.onFireTwo = this.onFireTwo.bind(this);
  this.onFireThree = this.onFireThree.bind(this);
  this.onFireFour = this.onFireFour.bind(this);
  this.onFireFive = this.onFireFive.bind(this);
}

    openModal() {
    this.setState({modalIsOpen: true});
    }

    closeModal() {
    this.setState({modalIsOpen: false});
    }

      onFireOne(){
          this.setState({modalIsOpen: true, image: '../stoichiometry-screen.png'})
      }
       onFireTwo(){
         this.setState({modalIsOpen: true, image: 2})
     }
      onFireThree(){
        this.setState({modalIsOpen: true, image: 3})
    }
     onFireFour(){
       this.setState({modalIsOpen: true, image: 4})
    }
    onFireFive(){
      this.setState({modalIsOpen: true, image: 5})
   }
  render(){
    return(
      <div>
      <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          >
          <button onClick={this.closeModal} className="btn btn-primary">close</button>
      </Modal>
      <div className="project-top-divider"></div>
      <h2 className="projects-header">Projects</h2>
        <div className="first-wrapper">
        <h1 className="header">Stoichiometry Calculator</h1>
          <img src={require('./methane.png')} className="equation-img" />
          <div className="project-text-wrapper">
            <p className="project-text">An app that solves stoichiometry problems on chemical equations. It also features login and registration and a user dashboard that displays the users solved equations. Built using MongoDB, Express, React, and Node.</p>
            <a href="https://blooming-mesa-54677.herokuapp.com/dashboard" className="visit-button">Visit App</a>
             // <button onClick={this.onFireOne} className="visit-button">See ScreenShot</button>
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
        <h1 className="header">Beer Statistics Scatterplot</h1>
          <img src={require('./scatter1.png')} className="hand-img" />
          <div className="project-text-wrapper">
            <p className="project-text">Interactive graph that displays beers based on their ABV and IBU value. Built using HTML, CSS, React, and JQuery. </p>
            <a href="https://beer-scatterplot.herokuapp.com/" className="visit-button">Visit App</a>
          </div>
        </div>
        <div className="first-wrapper">
        <h1 className="header">Bookmarks App</h1>
          <img src={require('./bookmark.png')} className="atnpr-logo" />
          <div className="project-text-wrapper">
            <p className="project-text">Web app that allows users to bookmark pages, rate the pages they bookmark, and filter by rating. The app uses a jQuery store, not just jQuery plugins. Built using HTML, CSS, and jQuery.</p>
            <a href="https://thinkful-ei24.github.io/alec-bookmarks-app/" className="visit-button">Visit App</a>
          </div>
        </div>
          <div className="project-bottom-divider"></div>
      </div>
    );
  }
}
export default Projects;
