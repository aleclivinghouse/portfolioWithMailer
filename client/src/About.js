import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
    <div className="about-wrapper">
    <div className="about-me">
     <div clasName="row">
     <div className="twoCol">
      <img src={require('./photo-cropped.jpg')} className="photo"/>
     </div>
     <div className="twoCol bio">
      <h4>Bio</h4>
      <p>adsf adsf ewwq dsasv ewqradfs dgf ret waf ds</p>
      <p>adsf adsfwrge ruyi yiuo wfv ewqr radfs dgf ret waf ds</p>
     </div>
    </div>
    </div>
  </div>
    );
  }
}

export default About;
