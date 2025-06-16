

import React from 'react';
import { Link } from 'react-router';

const ArtifactsCard = ({ artifact }) => {
  const { _id, imageUrl, name, description, createdAt, likes } = artifact;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        
        <p className="text-sm mb-2">
          <span className="font-semibold">Description:</span> {description}
        </p>

        <p className="text-sm mb-2">
          <span className="font-semibold">Created At:</span> {createdAt}
        </p>

        <button className="btn mb-3">
          👍 Like: {Array.isArray(likes) ? likes.length : 0}
        </button>

        <Link to={`/artifacts/${_id}`}>
          <button className="w-full bg-pink-500 text-white py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArtifactsCard;








