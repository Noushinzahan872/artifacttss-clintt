


import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Ayesha Rahman',
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    review: 'The collection of ancient artifacts is mesmerizing! I felt like I traveled back in time.',
    stars: 5,
  },
  {
    name: 'Jamal Uddin',
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    review: 'Excellent presentation of historical relics — each piece tells a story of its own.',
    stars: 5,
  },
  {
    name: 'Sraboni Parvin',
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    review: 'A fascinating display of cultural heritage. Highly recommended for history lovers!',
    stars: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="text-yellow-400 mt-2 text-lg">
    {'★'.repeat(count)}
  </div>
);

const ReviewCard = ({ name, image, review, stars, index }) => (
  <motion.div
    className=" p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition duration-300 border border-pink-200"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.3 }}
  >
    <img
      src={image}
      alt={name}
      className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-400 shadow"
    />
    <h3 className="font-semibold text-lg text-pink-600">{name}</h3>
    <p className="text-gray-600 mt-2 text-sm italic">"{review}"</p>
    <StarRating count={stars} />
  </motion.div>
);

const VisitorReviews = () => (
  <div className="">
    <motion.h2
      className="text-4xl font-bold text-center text-pink-700 mb-12"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      What Visitors Are Saying About Our Artifacts
    </motion.h2>

    <motion.div
      className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto px-6"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} index={index} />
      ))}
    </motion.div>
  </div>
);

export default VisitorReviews;
