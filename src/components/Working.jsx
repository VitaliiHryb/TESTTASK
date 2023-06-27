import React, { useState } from 'react';
import './Working.css';

const Working = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Handle the form submission, e.g., make a POST request with the form data
    console.log('Submitted:', { name, email, phone, position });

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
  };

  return (
    <div className="working-container">
      <div className="working-wrapper">
        <h1 className="working_title">Working with POST request</h1>
      </div>
      <form className="working_form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <br />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <br />
        <div className="options-container">
          <p className="select-position">Select your position:</p>
          <label>
            <input
              type="radio"
              value="Front-end developer"
              checked={position === 'Front-end developer'}
              onChange={() => setPosition('Front-end developer')}
            />
            Front-end developer
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Backend developer"
              checked={position === 'Backend developer'}
              onChange={() => setPosition('Backend developer')}
            />
            Backend developer
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Design"
              checked={position === 'Design'}
              onChange={() => setPosition('Design')}
            />
            Design
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="QA"
              checked={position === 'QA'}
              onChange={() => setPosition('QA')}
            />
            QA
          </label>
          <br />
        </div>
        <div className="add-photo_wrap">
          <button type="add-photo">Upload</button>
          <button type="upload-photo">Upload your photo</button>
        </div>
        <div className="upload-wrapper">
          <button type="upload">Sing in</button>
        </div>
      </form>
    </div>
  );
};

export default Working;
