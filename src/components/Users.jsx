import React, { useEffect, useState, useRef, useContext } from 'react';
import './Users.css';
import { fetchUsers } from '../gateway/gateway';
import ScrollContext from '../gateway/ScrollContext';

const Users = ({ newData }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [showMoreButton, setShowMoreButton] = useState(true);

  const fetchMoreUsers = () => {
    const nextPage = page + 1;
    fetchUsers(nextPage, 6)
      .then(response => {
        if (response.success) {
          setUsers(response.users);
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
  }, [newData]);

  const { scrollToUsers, setScrollToUsers } = useContext(ScrollContext);
  const workingRef = useRef(null);

  useEffect(() => {
    if (scrollToUsers && workingRef.current) {
      workingRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToUsers(false); // Reset the state after the scroll
    }
  }, [scrollToUsers, setScrollToUsers]);

  return (
    <div ref={workingRef}>
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
    </div>
  );
};

export default Users;
