import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class AdminPage extends React.Component {
  state = {
    permission: false
  }

  render() {
    return (
      <Route render={() => (
        this.state.permission ? (<h3>Admin Panel - hello world!!!</h3>) : (
          <Redirect
            to='/login'
          />
        )
      )} />
    );
  }


}

export default AdminPage;