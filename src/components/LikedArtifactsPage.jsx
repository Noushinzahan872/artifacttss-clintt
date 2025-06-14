import React, { useContext, useEffect, useState } from 'react';

import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthProvider';


const LikedArtifactsPage = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLikedArtifacts = async () => {
      try {
        const res = await fetch(`http://localhost:3000/liked-artifacts?email=${user.email}`);
        const data = await res.json();
        setLikedArtifacts(data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch liked artifacts:', err);
        setLoading(false);
      }
    };

    if (user?.email) {
      fetchLikedArtifacts();
    }
  }, [user?.email]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) return <p className="text-center py-10">Loading liked artifacts...</p>;

  return (
    <div className="min-h-screen p-10">
      
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Liked Artifacts
        </h2>
      {likedArtifacts.length === 0 ? (
        <p className="text-center text-gray-500">You haven't liked any artifacts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {likedArtifacts.map(artifact => (
            <div key={artifact._id} className="card bg-base-100 shadow-xl p-4 rounded-lg">
              <img src={artifact.imageUrl} alt={artifact.name} className="h-48 w-full object-cover rounded-lg" />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{artifact.name}</h3>
                <p className="text-sm text-gray-500">{artifact.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifactsPage;
