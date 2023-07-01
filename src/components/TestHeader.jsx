import React, { useContext } from 'react';
import Logo from '../images/Logo.svg';
import backgroundImage from '../images/pexels-alexandr-podvalny-1227513.jpeg';
import '../components/TestHeader.scss';
import ScrollContext from '../gateway/ScrollContext';

const TestHeader = () => {
  const { setScrollToUsers, setScrollToWorking } = useContext(ScrollContext);

  const handleSignUpClick = () => {
    setScrollToWorking(true);
  };

  const handleUsers = () => {
    setScrollToUsers(true);
  };

  return (
    <div className="test-header">
      <div className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="header__buttons">
          <button
            className="header__button header__button--users"
            onClick={handleUsers}
          >
            Users
          </button>
          <button
            className="header__button header__button--sign"
            onClick={handleSignUpClick}
          >
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
        <h2 className="content-background__test-assignment">
          Test assignment for front-end developer
        </h2>
        <p className="content-background__defines">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <button
          className="content-background__button"
          onClick={handleSignUpClick}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default TestHeader;
