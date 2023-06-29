import React, { useEffect, useState } from 'react';
import './Users.css';
import { fetchUsers } from '../gateway/gateway';

const Users = user => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(1, 6)
      .then(response => {
        if (response.success) {
          setUsers(response.users);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [user]);

  return (
    <div className="user-container">
      {users.map(user => (
        <div className="block" key={user.id}>
          <img src={user.photo} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
