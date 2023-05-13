import React, { useState } from 'react';
import axios from 'axios';
import './Modal.scss';

function Modal(props) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("change password submit click check")
    try {
      const response = await axios.post('http://localhost:3001/change-password', {
        currentPassword,
        password,
        confirmedPassword
      }, { withCredentials: true });
      props.handleCloseModal();
    } catch (error) {
      setError(error.response.data.error)
    }
  };

  return (
    <>
      <div className={`blurred-background ${props.show ? "active" : ""}`} onClick={props.handleCloseModal}></div>

      <div className="form-container" onSubmit={handleSubmit}>
        <h2>Change password</h2>
        {error && <div className="error">{error}</div>}
        <form>
          <label htmlFor="currentPassword">Current password:</label>
          <input type="password" id="currentPassword" name="currentPassword" required  onChange={(e) => setCurrentPassword(e.target.value)} />

          <label htmlFor="New password">New password:</label>
          <input type="password" id="password" name="password" required  onChange={(e) => setPassword(e.target.value)}/>

          <label htmlFor="passwordConfirmation">Password:</label>
          <input type="password" id="passwordConfirmation" name="passwordConfirmation" required onChange={(e) => setConfirmedPassword(e.target.value)}/>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Modal;