import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LearnPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: '1',
      title: '🎮 Fun Decision Making Games',
      description: 'Learn while playing fun games!',
      youtubeId: 'v1vXC-vKgKg',
      category: 'Games'
    },
    {
      id: '2',
      title: '🧠 Brain Training Activities',
      description: 'Exercises to make your brain stronger!',
      youtubeId: 'gwWKnnCMQ5c',
      category: 'Learning'
    },
    {
      id: '3',
      title: '🌳 Understanding Decision Trees',
      description: 'Simple explanation of decision trees',
      youtubeId: '7VoqxZtFtI8',
      category: 'Education'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-green-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Learn Through Fun Videos! 📚
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Video Player */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {selectedVideo ? (
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-xl text-gray-500">Select a video to start learning! 🎥</p>
            </div>
          )}
        </motion.div>

        {/* Video List */}
        <div className="space-y-4">
          {videos.map((video, index) => (
            <motion.button
              key={video.id}
              className="w-full"
              onClick={() => setSelectedVideo(video.youtubeId)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: index * 0.2 }
              }}
            >
              <motion.div
                className={`p-4 rounded-xl ${
                  selectedVideo === video.youtubeId
                    ? 'bg-green-500 text-white'
                    : 'bg-white hover:bg-green-50'
                } shadow-md transition-colors`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className={selectedVideo === video.youtubeId ? 'text-green-100' : 'text-gray-600'}>
                  {video.description}
                </p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                  selectedVideo === video.youtubeId
                    ? 'bg-green-400 text-white'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {video.category}
                </span>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage; 