
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
;
import { AuthContext } from '../contexts/AuthProvider';
import { Link, useLoaderData } from 'react-router';

const ArtifactsDetails = () => {
  const artifact = useLoaderData();
  const { user } = useContext(AuthContext);

  // Initialize likes safely
  const [likes, setLikes] = useState(Array.isArray(artifact.likes) ? artifact.likes.length : 0);
  const [liked, setLiked] = useState(Array.isArray(artifact.likes) && artifact.likes.includes(user?.email));

  // Toggle like button
  const handleLikeToggle = async () => {
    try {
      const res = await fetch(`https://artifacts-server-iota.vercel.app/artifacts/${artifact._id}/toggleLike`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email }),
      });

      if (res.ok) {
        const data = await res.json();
        setLiked(data.liked); // true or false from backend
        setLikes(data.likesCount); // updated count from backend
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        {/* Image Section */}
        <div className="lg:w-1/2">
          <motion.img
            src={artifact.imageUrl}
            alt={artifact.name}
            className="w-full h-80 object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-8 space-y-5">
          <h2 className="text-3xl font-bold text-pink-600">{artifact.name}</h2>

          <div>
            <p className="font-semibold">Type:</p>
            <p>{artifact.type}</p>
          </div>

          <div>
            <p className="font-semibold">Description:</p>
            <p>{artifact.description}</p>
          </div>

          <div>
            <p className="font-semibold">Historical Context:</p>
            <p>{artifact.context}</p>
          </div>

          <div>
            <p className="font-semibold">Present Location:</p>
            <p>{artifact.presentLocation}</p>
          </div>

          <div>
            <p className="font-semibold">Discovered By:</p>
            <p>{artifact.discoveredBy}</p>
          </div>

          <div>
            <p className="font-semibold">Discovered At:</p>
            <p>{artifact.discoveredAt}</p>
          </div>

          <div>
            <button onClick={handleLikeToggle} className={`btn ${liked ? 'btn-secondary' : 'btn-outline btn-info'}`}>
              {liked ? '👍 Liked' : '👍 Like'}: {likes}
            </button>
          </div>

          <div>
            <Link to="/allArtifacts" className="btn btn-secondary mt-4">
              Back to All Artifacts
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtifactsDetails;






// import React from 'react'
// import { motion } from 'framer-motion';
// import { Link, useLoaderData } from 'react-router';

// const ArtifactsDetails = () => {
//   const artifact = useLoaderData();

//   return (
//     <div className="min-h-screen  px-4 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-6xl mx-auto shadow-2xl rounded-2xl overflow-hidden flex flex-col lg:flex-row"
//       >
//         {/* Image Section */}
//         <div className="lg:w-1/2">
//           <motion.img
//             src={artifact.imageUrl}
//             alt={artifact.name}
//             className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
//             whileHover={{ scale: 1.05 }}
//           />
//         </div>

//         {/* Details Section */}
//         <div className="lg:w-1/2 p-8 space-y-5">
//           <h2 className="text-3xl font-bold text-pink-600">{artifact.name}</h2>

//           <div>
//             <p className=" font-semibold">Type:</p>
//             <p>{artifact.type}</p>
//           </div>

//           <div>
//             <p className="font-semibold">Description:</p>
//             <p>{artifact.description}</p>
//           </div>

//           <div>
//             <p className="font-semibold">Historical Context:</p>
//             <p>{artifact.context}</p>
//           </div>

//           <div>
//             <p className="font-semibold">Present Location:</p>
//             <p>{artifact.presentLocation}</p>
//           </div>

//           <div>
//             <p className="font-semibold">Discovered By:</p>
//             <p>{artifact.discoveredBy}</p>
//           </div>

//           <div>
//             <p className="font-semibold">Discovered At:</p>
//             <p>{artifact.discoveredAt}</p>
//           </div>

//           <div>
//             <button className="btn btn-outline btn-info">
//               ❤️ Like: {artifact.likes?.length || 0}
//             </button>
//           </div>

//           <div>
//             <Link to="/allArtifacts" className="btn btn-secondary mt-4">
//                Back to All Artifacts
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ArtifactsDetails;







