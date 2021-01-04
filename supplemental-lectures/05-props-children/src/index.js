import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.css';

import { getUsers } from './api';
import {
  User,
  Navbar,
} from './components';

const App = () => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);

  const handleChange = (ev) => {
    setUser(users.find(user => user.id === Number(ev.target.value)));
  }

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(fetchUsers, []);

  return <>
    <Navbar>
      <User user={user}/>
    </Navbar>
    <h1>
      <User user={user} />
    </h1>
    <h3>Select a User</h3>
    <select onChange={handleChange}>
      {
        users.map(user => <option key={user.id} value={user.id}>{user.username}</option>)
      }
    </select>
  </>
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
)