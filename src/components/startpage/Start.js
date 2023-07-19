import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

const Start = () => {
  return (
    <div className="container-fluid start">
      <h1 className="animate__animated animate__fadeInDown">Welcome to our Landing Page</h1>
      <div className="btn-container">
        <Link to="/navbar" className="btnn">First Page</Link>
        <Link to="/secondpage" className="btnn ">Second Page</Link>
        <Link to="/thirdpage" className="btnn ">Third Page</Link>
      </div>
    </div>
  );
}

export default Start;
