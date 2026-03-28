import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;