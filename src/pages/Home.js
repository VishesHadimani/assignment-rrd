import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="card-container">
        <Card>
          {/* Card content */}
        </Card>
        {/* Repeat the Card component for the other three cards */}
      </div>
    </div>
  );
};

export default Home;
