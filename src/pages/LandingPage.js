import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, your one-stop-shop for the best house plants.</p>
      <div className='text-content'>
      <img 
        src="https://static.actu.fr/uploads/2023/02/capture-d-ecran-2023-02-03-a-115848.png" 
        alt="Beautiful botanical garden" 
        style={{ maxWidth: '40%', borderRadius: '10px', margin: '20px 0' }}
      />
      <div>
      <p>
        Are you tired of your home looking like a barren wasteland? Do you want to bring the jungle into your living room 
        without all the pesky wild animals? Look no further! Our plants are so green, even the jealous neighbors will ask 
        for your secret. With Paradise Nursery, you’re not just buying plants, you're inviting new roommates that only 
        require water and admiration.
      </p>
      <p>
        Whether you're a seasoned plant whisperer or you’ve killed every green thing you’ve ever owned, we’ve got something 
        for everyone. From the indestructible Snake Plant to the sun-loving Aloe Vera, we've carefully curated a selection 
        of plants that will turn your home into a lush, green paradise. Plus, our plants won't judge you if you talk to them.
      </p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
