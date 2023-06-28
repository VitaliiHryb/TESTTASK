import React, { useState } from 'react';
import './Working.css';

const Working = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('Front-end developer');
  const [photo, setPhoto] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Handle the form submission, e.g., make a POST request with the form data
    console.log('Submitted:', { name, email, phone, position, photo });

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setPhoto('');
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

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />

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

          <label>
            <input
              type="radio"
              value="Backend developer"
              checked={position === 'Backend developer'}
              onChange={() => setPosition('Backend developer')}
            />
            Backend developer
          </label>

          <label>
            <input
              type="radio"
              value="Design"
              checked={position === 'Design'}
              onChange={() => setPosition('Design')}
            />
            Design
          </label>

          <label>
            <input
              type="radio"
              value="QA"
              checked={position === 'QA'}
              onChange={() => setPosition('QA')}
            />
            QA
          </label>
        </div>

        <div className="add-photo_wrap">
          <button type="button">Upload</button>
          <div className="upload-input">
            <input
              type="text"
              value={photo}
              placeholder="Upload your photo"
              onChange={e => setPhoto(e.target.value)}
            />
          </div>
        </div>

        <div className="upload-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Working;
