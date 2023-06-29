import React, { useState } from 'react';
import TestHeader from './TestHeader';
import Users from './Users';
import Working from './Working';
import { postUser, fetchUsers, fetchToken } from '../gateway/gateway';

const Page = () => {
  const [newUser, setNewUser] = useState(true);

  const handleFormSubmit = (positionId, name, email, phone, photo) => {
    fetchToken()
      .then(tokenData => {
        const token = tokenData.token; // Extract the token from the response data

        postUser(positionId, name, email, phone, photo, token)
          .then(data => {
            // Handle the successful response

            // Fetch the updated list of users
            fetchUsers(1, 6)
              .then(response => {
                if (response.success) {
                  setNewUser(!newUser);
                }
              })
              .catch(error => {
                console.error('Error fetching users:', error);
              });
          })
          .catch(error => {
            // Handle the error
            console.error('Error:', error);
          });
      })
      .catch(error => {
        console.error('Error fetching token:', error);
      });
  };

  return (
    <div className="App">
      <TestHeader />
      <Users user={newUser} />
      <Working handleFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Page;
