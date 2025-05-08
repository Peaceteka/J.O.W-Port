import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  text?: string;
  name?: string;
  icon?: ReactNode;
  delay?: number;
}

export default function SocialLink({ href, text, name, icon, delay = 0 }: SocialLinkProps) {
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
      {icon && icon}
      <span className="text-gray-700 font-medium">{text || name}</span>
    </motion.a>
  );
}
