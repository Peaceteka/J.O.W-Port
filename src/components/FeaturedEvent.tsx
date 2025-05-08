import { motion } from 'framer-motion';
import Image from 'next/image';

interface FeaturedEventProps {
  imageSrc: string;
  description: string;
  hashtags: string[];
  delay?: number;
}

export default function FeaturedEvent({ imageSrc, description, hashtags, delay = 0 }: FeaturedEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-[400px] w-full">
        <Image
          src={imageSrc}
          alt={description}
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-700 text-lg mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-blue-600 text-sm font-medium hover:text-blue-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
