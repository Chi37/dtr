import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <> 
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p id='signup-message'>{this.state.message}</p>
      </>
    );
  }
}

export default SignupPage;