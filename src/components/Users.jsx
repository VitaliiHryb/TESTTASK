import React from 'react';
import Photo from '../images/photo-cover.svg';
import './Users.css';

const Users = () => {
  return (
    <div className="users-container">
      <h2 className="working_with-get">Working with GET request</h2>
      <div className="user-container">
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 1</h2>
          <p>
            Some text for Block 1 Some text for Block 1 Some text for Block 1
          </p>
        </div>
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 2</h2>
          <p>
            Some text for Block 2 Some text for Block 2 Some text for Block 2
          </p>
        </div>
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 3</h2>
          <p>
            Some text for Block 3 Some text for Block 3 Some text for Block 3
          </p>
        </div>
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 4</h2>
          <p>
            Some text for Block 4 Some text for Block 4 Some text for Block 4
          </p>
        </div>
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 5</h2>
          <p>
            Some text for Block 5 Some text for Block 5 Some text for Block 5
          </p>
        </div>
        <div className="block">
          <img src={Photo} alt="No user" />
          <h2>Block 6</h2>
          <p>
            Some text for Block 6 Some text for Block 6 Some text for Block 6
          </p>
        </div>
      </div>
      <button className="block-button">Show more</button>
    </div>
  );
};

export default Users;
