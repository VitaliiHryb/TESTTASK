import React, { useContext } from 'react';
import Logo from '../images/Logo.svg';
import backgroundImage from '../images/pexels-alexandr-podvalny-1227513.jpeg';
import '../components/TestHeader.css';
import ScrollContext from '../gateway/ScrollContext';

const TestHeader = () => {
  const { scrollToWorking, setScrollToWorking } = useContext(ScrollContext);

  const handleSignUpClick = () => {
    setScrollToWorking(true);
  };

  return (
    <div className="test-container">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="buttons">
          <button className="users">Users</button>
          <button className="sing" onClick={handleSignUpClick}>
            Sign up
          </button>
        </div>
      </div>
      <div
        className="content-background"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
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
        <button onClick={handleSignUpClick}>Sign up</button>
      </div>
    </div>
  );
};

export default TestHeader;
