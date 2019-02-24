import React, {Component} from 'react';
import './form.css';
import {validateEmail, validateMessage} from './validation';

class ContactForm extends Component{
  constructor(props){
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      success: '',
      emailError: '',
      messageError: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }


  onSubmit(e){
    e.preventDefault();
    const validatedEmail = validateEmail(this.state.email);
    const validatedMessage = validateMessage(this.state.message);
    if(validatedEmail === true && validatedMessage === true){
      const post = {
        email: this.state.email,
        message: this.state.message
      }
      //setState message
      this.setState({
        emailError: '',
        messageError: '',
        success: 'Your message was sent successfully'
      })
      //call action
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
    if(validatedEmail === false){
      this.setState({
        emailError: 'Must be a valid email',
      })
    }
    if(validatedMessage === false){
      this.setState({
        messageError: 'Message must be at least 5 characters',
      })
    }
  }


  render() {
    return(
      <div>
        <p className="error">{this.state.messageError}</p>
        <p className="error">{this.state.emailError}</p>
        <p className="success">{this.state.success}</p>
        <div className="form-wrapper">
        <form onSubmit={this.onSubmit}>
          <h1>Contact</h1>
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
        <div className="form-divider"></div>
      </div>
    );
  }
}

export default ContactForm;
