

import React, { useState, useEffect } from 'react'; 
import { useLoaderData } from 'react-router';
import ArtifactsCard from './ArtifactsCard';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const loadedArtifacts = useLoaderData(); 

 
  const [loading, setLoading] = useState(true); 
  const [artifacts, setArtifacts] = useState([]); 
  const [searchText, setSearchText] = useState('');
   
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

 
  useEffect(() => {
    if (loadedArtifacts) {
      setArtifacts(loadedArtifacts);
      setLoading(false); 
    }
  }, [loadedArtifacts]);

  const handleSearch = () => {
    setLoading(true); 

    fetch(`https://artifacts-server-iota.vercel.app/arts?search=${searchText}`)
      .then(res => res.json())
      .then(data => {
        setArtifacts(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  };

  return (
    <>
    <Helmet>
      <title>All Artifacts</title>
    </Helmet>
    <div className="px-4">
      <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
        All Artifacts
      </h2>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by Artifact Name"
          className="input input-bordered w-full max-w-xs mr-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="btn btn-secondary">Search</button>
      </div>

      {/*  Search */}
      {
        loading ? (
          <div className="flex justify-center py-10 col-span-3">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              artifacts.length > 0 ? (
                artifacts.map(artifact => (
                  <ArtifactsCard key={artifact._id} artifact={artifact} />
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-500">
                  No artifacts found.
                </p>
              )
            }
          </div>
        )
      }
    </div>
    </>
  );
};

export default AllArtifacts;












