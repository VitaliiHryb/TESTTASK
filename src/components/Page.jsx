import React, { useState } from 'react';
import TestHeader from './TestHeader';
import Users from './Users';
import Working from './Working';
import { postUser, fetchUsers, fetchToken } from '../gateway/gateway';
import ScrollContext from '../gateway/ScrollContext';

const Page = () => {
  const [newData, setNewData] = useState(true);
  const [scrollToWorking, setScrollToWorking] = useState(false);
  const [scrollToUsers, setScrollToUsers] = useState(false);

  const handleFormSubmit = (positionId, name, email, phone, photo) => {
    fetchToken().then(tokenData => {
      const token = tokenData.token; // Extract the token from the response data

      postUser(positionId, name, email, phone, photo, token).then(response => {
        if (response.success) {
          // Fetch the updated list of users
          fetchUsers(1, 6).then(response => {
            if (response.success) {
              setNewData(true);
            }
          });
        }
      });
    });
  };

  return (
    <div className="page">
      <ScrollContext.Provider
        value={{
          scrollToWorking,
          setScrollToWorking,
          scrollToUsers,
          setScrollToUsers,
        }}
      >
        <TestHeader />
        <Users newData={newData} />
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
