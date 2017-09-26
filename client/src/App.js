import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { tokenCheck, logout } from './actions/auth';
import axios from 'axios';

class App extends Component {
  state = { user: {} }

  componentDidMount() {
    let user = tokenCheck();
    if (user) {
      for ( let key of Object.keys(user) ) {
        axios.defaults.headers.common[key] = user[key]
      }

      axios.get('/auth/validate_token')
        .then( ({ data: { data }}) => {
          this.setState({ user: {...user, ...data }})
        });
    }
  }

  loginUser = () => {
    let user = tokenCheck();
    for ( let key of Object.keys(user) ) {
      axios.defaults.headers.common[key] = user[key]
    }

    this.setState({ user });
  }

  logoutUser = () => {
    axios.delete('/auth/sign_out')
      .then( () => {
        logout();
        this.setState({ user: {} })
      });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <NavBar logoutUser={this.logoutUser} user={user.id} />
        <Container>
          { user.id ?
              <Home user={user} /> :
              <Auth loginUser={this.loginUser} />
          }
        </Container>
      </div>
    );
  }
}

export default App;
