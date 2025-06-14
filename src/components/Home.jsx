
import { Link, useLoaderData } from 'react-router';
import ArtifactsCard from './ArtifactsCard';
import VisitorReviews from './VisitorReviews';
import ArtifactsShowcase from './ArtifactsShowCase';
import BannerSlider from './BannerSlider';

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
            <BannerSlider></BannerSlider>
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

<VisitorReviews></VisitorReviews>
<ArtifactsShowcase></ArtifactsShowcase>
        </div>
    );
};

export default Home;