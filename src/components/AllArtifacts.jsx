


import React, { useState } from 'react'; 
import { useLoaderData } from 'react-router';
import ArtifactsCard from './ArtifactsCard';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const loadedArtifacts = useLoaderData(); 
  const [artifacts, setArtifacts] = useState(loadedArtifacts); 
  const [searchText, setSearchText] = useState(''); 

  
  const handleSearch = () => {
    fetch(`http://localhost:3000/arts?search=${searchText}`)
      .then(res => res.json())
      .then(data => setArtifacts(data));
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

      {/* map */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          artifacts.length > 0 ? (
            artifacts.map(artifact => (
              <ArtifactsCard key={artifact._id} artifact={artifact} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No artifacts found</p> 
          )
        }
      </div>
    </div>
    </>
  );
};

export default AllArtifacts;








// import React from 'react';
// import { useLoaderData } from 'react-router';
// import ArtifactsCard from './ArtifactsCard';

// const AllArtifacts = () => {
//      const artifacts = useLoaderData();
//     console.log(artifacts);
    
//     return (
//         <div>
//             <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
//           All Artifacts
//         </h2>
//             <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
//                 {
//                     artifacts.map(artifact => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllArtifacts;
