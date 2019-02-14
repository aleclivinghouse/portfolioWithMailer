import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {createPost} from '../actions/postActions';

class ContactForm extends Component{
  constructor(props){
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      email: this.state.email,
      message: this.state.message

    }
    //call actions
    console.log(post);
    fetch('/api/form', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
  }


  render() {
    return(
      <div>
        <h1>Contact</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Email:</label><br />
            <input type="text" name="email"
            value={this.state.email}
            onChange={this.onChange}/>
          </div>
          <div>
            <label>Message</label><br />
            <textarea name="message"
            value={this.state.message}
            onChange={this.onChange}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
