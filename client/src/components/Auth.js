import React from 'react';
import Register from './Register';
import Login from './Login.js';
import { Button, Divider } from 'semantic-ui-react';

class Auth extends React.Component {
  state = { showRegister: false }

  toggleView = () => {
    this.setState(state => {
      return { showRegister: !state.showRegister }
    })
  }
  render() {
    const { showRegister } = this.state;
    const { loginUser } = this.props;

    let Component = Login;
    let text = "New User?"

    if (showRegister) {
      Component = Register;
      text = "Already a User?"
    }
    return (
      <div>
        <Component loginUser={loginUser} />
        <Divider />
        <Button onClick={this.toggleView}>{text}</Button>
      </div>
    )
  }
}

export default Auth;
