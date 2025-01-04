import { motion } from 'framer-motion';

export const LoadingState: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
    </motion.div>
  );
}; 