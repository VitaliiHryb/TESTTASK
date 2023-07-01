import React, { useState, useContext, useEffect, useRef } from 'react';
import './Working.scss';
import ScrollContext from '../gateway/ScrollContext';
import { fetchPositions } from '../gateway/gateway';

const Working = ({ handleFormSubmit, setFormSubmitted }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [photo, setPhoto] = useState('');
  const [positions, setPositions] = useState([]);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    fetchPositions().then(response => {
      if (response.success) {
        setPositions(response.positions);
      }
    });
  }, []);

  const { scrollToWorking, setScrollToWorking } = useContext(ScrollContext);
  const workingRef = useRef(null);

  useEffect(() => {
    if (scrollToWorking && workingRef.current) {
      workingRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToWorking(false);
    }
  }, [scrollToWorking, setScrollToWorking]);

  useEffect(() => {
    setFormValid(
      name.trim() !== '' &&
        email.trim() !== '' &&
        phone.trim() !== '' &&
        position.trim() !== '' &&
        photo !== '',
    );
  }, [name, email, phone, position, photo]);

  const handleSubmit = e => {
    e.preventDefault();

    handleFormSubmit(position, name, email, phone, photo);

    setName('');
    setEmail('');
    setPhone('');
    setPosition('');
    setPhoto('');

    setFormSubmitted(true);
  };

  return (
    <div ref={workingRef}>
      <div className="working-container">
        <div className="working-wrapper">
          <h1 className="working-title">Working with POST request</h1>
        </div>
        <form className="working-form" onSubmit={handleSubmit}>
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
            {positions.map(pos => (
              <label key={pos.id}>
                <input
                  type="radio"
                  value={pos.id}
                  checked={position === pos.id}
                  onChange={() => setPosition(pos.id)}
                />
                {pos.name}
              </label>
            ))}
          </div>

          <label>
            <div className="custom-file-upload">Upload</div>
            <div className="custom-file-upload-placeholder">
              {photo ? photo.name : 'Upload your photo'}
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
            <button type="submit" disabled={!formValid}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Working;
