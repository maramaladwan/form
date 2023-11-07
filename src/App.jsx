import React, { Component } from 'react';
import './App.css'


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // يمكنك إجراء الإجراءات الخاصة بك هنا لحفظ البيانات.
    const dataToSave = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
  
    console.log('Data to save:', dataToSave);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='f'>
        <label>
          Name:
          <input 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Phone:
          <input 
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default Form;