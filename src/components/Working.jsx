import React, { useState, useEffect } from 'react';
import './Working.css';
import { fetchPositions } from '../gateway/gateway';

const Working = ({ handleFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState('');
  const [positions, setPositions] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    handleFormSubmit(position, name, email, phone, photo);

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setPhoto('');
  };

  useEffect(() => {
    fetchPositions()
      .then(response => {
        if (response.success) {
          setPositions(response.positions);
        }
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

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
          {positions.map(pos => {
            return (
              <label key={pos.id}>
                <input
                  type="radio"
                  value={pos.id}
                  checked={position === pos.id}
                  onChange={() => setPosition(pos.id)}
                />
                {pos.name}
              </label>
            );
          })}
        </div>

        <label>
          <div className="custom-file-upload">Upload</div>
          <div className="custom-file-upload_placeholder">
            Upload your photo
          </div>
          <input
            id="file-upload"
            type="file"
            accept="image/png, image/jpeg"
            onChange={e => setPhoto(e.target.files[0])}
            placeholder="Upload your photo"
            lang="en"
          />
        </label>

        <div className="upload-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Working;
