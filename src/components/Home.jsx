

import { useEffect, useState } from 'react';
import ArtifactsCard from './ArtifactsCard';
import VisitorReviews from './VisitorReviews';
import ArtifactsShowcase from './ArtifactsShowCase';
import BannerSlider from './BannerSlider';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';


const Home = () => {
  const [topLikedArtifacts, setTopLikedArtifacts] = useState([]);

  useEffect(() => {
    fetch('https://artifacts-server-iota.vercel.app/top-liked-artifacts')
      .then(res => res.json())
      .then(data => setTopLikedArtifacts(data));
  }, []);

  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
      <BannerSlider />
      <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Features of Artifacts
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {topLikedArtifacts.map(artifact => (
          <ArtifactsCard key={artifact._id} artifact={artifact} />
        ))}
      </div>

      <div className="my-6 flex justify-center">
        <Link to="/allArtifacts">
          <button className="btn btn-secondary">See All</button>
        </Link>
      </div>

      <VisitorReviews />
      <ArtifactsShowcase />
      
    </div>
  );
};

export default Home;









// import { Link, useLoaderData } from 'react-router';
// import ArtifactsCard from './ArtifactsCard';
// import VisitorReviews from './VisitorReviews';
// import ArtifactsShowcase from './ArtifactsShowCase';
// import BannerSlider from './BannerSlider';

// const Home = () => {
//     // const [showAll, setShowAll] = useState(false);
//     const artifacts = useLoaderData();
//     console.log(artifacts);


// //     // Toggle Button Click Handler
// //   const handleToggle = () => {
// //     setShowAll(!showAll);
// //   };
    
//     return (
        
//         <div>
//             <BannerSlider></BannerSlider>
//             home
//             <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
//                 {
//                     artifacts?.slice(0,6).map(artifact => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
//                 }
//             </div>


//            {/*  See All button that redirects to /allArtifacts */}
//       <div className='my-6 flex justify-center'>
//         <Link to="/allArtifacts">
//           <button className="text-center btn btn-secondary">See All</button>
//         </Link>
//       </div>

// <VisitorReviews></VisitorReviews>
// <ArtifactsShowcase></ArtifactsShowcase>
//         </div>
//     );
// };

// export default Home;