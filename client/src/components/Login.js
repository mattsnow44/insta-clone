import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import axios from 'axios';
import { login } from '../actions/auth';

class Login extends React.Component {
  state = { email: '', password: '' }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    axios.post('/auth/sign_in', { email, password })
      .then( res => login(res.data.data.id, res.headers, this.props.loginUser ) )
  }

  render() {
    let { email, password } = this.state;
    return (
      <div>
        <Header as="h2" textAlign="center">Register!</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            type="email"
            name="email"
            required
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            type="password"
            name="password"
            required
            value={password}
            onChange={this.handleChange}
          />
          <Form.Button basic>Login</Form.Button>
        </Form>
      </div>
    )
  }
}

export default Login;
