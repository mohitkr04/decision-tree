import { useDrag } from 'react-dnd';
import { motion } from 'framer-motion';

interface DragItem {
  type: string;
}

interface DraggableNodeProps {
  type: string;
}

export const DraggableNode: React.FC<DraggableNodeProps> = ({ type }) => {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, { isDragging: boolean }>(() => ({
    type: 'node',
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <motion.div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
      className="p-4 rounded-lg shadow cursor-move"
      whileHover={{ scale: 1.05 }}
    >
      {type}
    </motion.div>
  );
}; 