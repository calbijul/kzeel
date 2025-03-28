import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Home from '../page/home';

const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log('LoadingScreen mounted. Showing welcome message...');
    const timer = setTimeout(() => {
      console.log('Transitioning to Home component');
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="bg-gray-900 w-full h-screen flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl text-white mb-4">Welcome!</h2>
        <h1 className="text-white tracking-widest text-4xl">WADUP</h1>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gray-900 w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Home />
    </motion.div>
  );
};

export default LoadingScreen;
