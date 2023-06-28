import React from 'react';
import TestHeader from './TestHeader';
import Users from './Users';
import Working from './Working';
import { postUser } from '../gateway/gateway';

const Page = () => {
  const handleFormSubmit = (positionId, name, email, phone, photo) => {
    const token = 'YOUR_TOKEN_HERE'; // Replace with your actual token
    postUser(positionId, name, email, phone, photo, token)
      .then(data => {
        // Handle the successful response
        console.log('Success:', data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <TestHeader />
      <Users />
      <Working onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Page;
