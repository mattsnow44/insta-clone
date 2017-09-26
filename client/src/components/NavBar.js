import React from 'react';
import { Menu } from 'semantic-ui-react';

class NavBar extends React.Component {
  state = {  }
  render() {
    return(
      <Menu>
        <Menu.Menu style={{ cursor: 'pointer'}} position="right">
          { this.props.user ?
            <Menu.Item onClick={this.props.logoutUser} name="logout" /> :
            <Menu.Item name="login" />
          }
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
