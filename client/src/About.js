import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
    <div className="about-wrapper">

    <div className="about-me">
     <div clasName="row">
      <h2 className="the-name">Alec Livinghouse</h2>
     <div className="twoCol">
      <img src={require('./photo-cropped.jpg')} className="photo"/>
     </div>
     <div className="twoCol bio">
      <h4>Bio</h4>
        <p className="about-paragraph">I graduated from UC Santa Cruz in 2018 with a B.A. in Film and Digital Media. Since then I have gone on to attend Thinkful Coding Bootcamp where I have studied MondoDB, SQL, Node.js, Express.js, jQuery, and React.js. I also have some previous exprerience with Python and Django.</p>
        <a href='./resume' download className="rain-button">Resume</a>
     </div>
    </div>
    </div>
      <div className="about-divider"></div>
  </div>
    );
  }
}

export default About;

//#202020
//#282828
