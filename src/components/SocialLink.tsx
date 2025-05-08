import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { createElement } from 'react';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  text: string;
  delay: number;
  color: string;
}

export default function SocialLink({ href, text, icon, color, delay = 0 }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col items-center justify-center gap-3"
    >
      <div className={color}>
        {createElement(icon, { size: 32 })}
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </motion.a>
  );
}
