import React, {Component} from 'react';
import axios from 'axios';
import './form.css';

class ContactForm extends Component{
    constructor(){
      super()
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
        name:this.state.name,
        email: this.state.email,
        message:this.state.message
      }
      console.log('this is the post');
      console.log(post);
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4 form-wrapper">
                <form id="contact-form" onSubmit={this.onSubmit} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name"
                          onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                         onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="2" id="message"
                          onChange={this.onChange} />
                    </div>
                    <button type="submit" className="button1">Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactForm;
