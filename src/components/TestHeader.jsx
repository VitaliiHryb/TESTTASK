import React from 'react';
import Logo from '../images/Logo.svg';
import backgroundImage from '../images/pexels-alexandr-podvalny-1227513.jpeg';
import '../components/TestHeader.css';

const TestHeader = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="buttons">
          <button div className="users">
            Users
          </button>
          <button className="sing">Sign up</button>
        </div>
      </div>
      <div
        className="content"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2 className="test-assignment">
          Test assignment for front-end developer
        </h2>
        <p className="defines">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default TestHeader;
