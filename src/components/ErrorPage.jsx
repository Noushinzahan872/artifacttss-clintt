

import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  px-4">
      {/*  Animation */}
      <div className="max-w-md mb-6">
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_JkVxPf.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>

      {/* Error Info */}
      <h1 className="text-6xl font-extrabold text-pink-600 mb-2">
        {error?.status || 404}
      </h1>
      <p className="text-2xl text-gray-700 font-semibold mb-4">
        {error?.error?.message || 'Oops! Something went wrong.'}
      </p>

      {/*  Go Home Button */}
      <Link to="/">
        <button className="btn btn-secondary">Go To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;























// import React from 'react';
// import { Link, useRouteError } from 'react-router';

// const ErrorPage = () => {
//     const error=useRouteError()
//     return (
//         <div>
//             <div className='py-24 text-center'>

//         <h1 className='mb-8 text-7xl font-thin text-gray-900'>
//           {error?.status || 404}
//         </h1>
//         <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
//           {error?.error?.message || 'Opps Something Went Wrong!'}
//         </p>

//        <Link to='/'>
//        <button className='btn btn-secondary' label='go to home'>Go To Home</button>
//        </Link>

//       </div>
//         </div>
//     );
// };

// export default ErrorPage;