
import { Link, useLoaderData } from 'react-router';
import ArtifactsCard from './ArtifactsCard';

const Home = () => {
    // const [showAll, setShowAll] = useState(false);
    const artifacts = useLoaderData();
    console.log(artifacts);


//     // Toggle Button Click Handler
//   const handleToggle = () => {
//     setShowAll(!showAll);
//   };
    
    return (
        <div>
            home
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
                {
                    artifacts?.slice(0,6).map(artifact => <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>)
                }
            </div>


           {/*  See All button that redirects to /allArtifacts */}
      <div className='my-6 flex justify-center'>
        <Link to="/allArtifacts">
          <button className="text-center btn btn-secondary">See All</button>
        </Link>
      </div>


        </div>
    );
};

export default Home;