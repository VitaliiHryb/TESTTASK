import React, { useState } from 'react';
import TestHeader from './TestHeader';
import Users from './Users';
import Working from './Working';
import { postUser, fetchUsers, fetchToken } from '../gateway/gateway';
import ScrollContext from '../gateway/ScrollContext';

const Page = () => {
  const [newUser, setNewUser] = useState(true);
  const [newData, setNewData] = useState(true);
  const [scrollToWorking, setScrollToWorking] = useState(false);
  const [scrollToUsers, setScrollToUsers] = useState(false);

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
                  setNewUser(!newData);
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
      <ScrollContext.Provider
        value={{
          scrollToWorking,
          setScrollToWorking,
          scrollToUsers,
          setScrollToUsers,
        }}
      >
        <TestHeader />
        <Users user={newUser} newData={newData} />
        <Working
          handleFormSubmit={handleFormSubmit}
          setNewData={setNewData}
          newData={newData}
        />
      </ScrollContext.Provider>
    </div>
  );
};

export default Page;
