

import React, { useEffect, useState } from 'react';

const LikedArtifactsPage = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const res = await fetch('http://localhost:3000/liked-artifacts'); 
        const data = await res.json();
        setLikedArtifacts(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch liked artifacts:', err);
        setLoading(false);
      }
    };

    fetchLikedArtifacts(); 
  }, []);

  if (loading) return <p className="text-center py-10">Loading liked artifacts...</p>;

  return (
    <div className="min-h-screen p-10">
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
        All Liked Artifacts
      </h2>

      {likedArtifacts.length === 0 ? (
        <p className="text-center text-gray-500">No artifacts have been liked yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="card bg-white shadow-lg border rounded-lg overflow-hidden"
            >
              <img
                src={artifact.imageUrl}
                alt={artifact.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{artifact.name}</h3>
                <p className="text-sm text-gray-600">{artifact.description}</p>
                <p className="text-xs mt-2 text-gray-400">
                  👍 {artifact.likes?.length || 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifactsPage;








