import React, { useEffect, useState } from 'react';
import './Users.css';
import { fetchUsers } from '../gateway/gateway';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const fetchMoreUsers = () => {
    const nextPage = page + 1;
    fetchUsers(nextPage, 1)
      .then(response => {
        if (response.success) {
          const newUsers = [...users, ...response.users];
          setUsers(newUsers);
          setPage(nextPage);
          setShowMoreButton(nextPage < response.total_pages);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  };

  useEffect(() => {
    fetchUsers(1, 6)
      .then(response => {
        if (response.success) {
          setUsers(response.users);
          setShowMoreButton(response.page < response.total_pages);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <div className="user-container">
        {users.map(user => (
          <div className="block" key={user.id}>
            <img src={user.photo} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.position}</p>
          </div>
        ))}
      </div>
      {showMoreButton && (
        <div className="show-more-container">
          <button className="block-button" onClick={fetchMoreUsers}>
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
