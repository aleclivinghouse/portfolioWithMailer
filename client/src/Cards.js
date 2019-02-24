import React, { Component } from 'react';
import './App.css';
import './cards.css';

class Cards extends Component {
  render() {
    return (
      <div className="projects-container">
        <h1 className="the-name">My Favorite Stack</h1>
    <div class="row">
  <div class="column">
    <div class="card"><img src={require('./mongo.png')} className="card-image"/></div>
  </div>
  <div class="column">
    <div class="card"><img src={require('./express.png')} className="card-image"/></div>
  </div>
  <div class="column">
    <div class="card"><img src={require('./react.png')} className="card-image"/></div>
  </div>
  <div class="column">
      <div class="card"><img src={require('./node.png')} className="card-image"/></div>
  </div>
</div>
</div>
    );
  }
}

export default Cards;

//        // <div className="col-3">
        //   <div className="box black">3 columns</div>
        // </div>
