import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p style={{ textAlign: 'center', fontWeight: '900' }}>Sorry, your page not found</p>
      <Link to={'/'}>Home</Link>
    </div>
  );
};

export default NotFoundPage;
