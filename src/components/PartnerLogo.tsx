import { motion } from 'framer-motion';
import Image from 'next/image';

interface PartnerLogoProps {
  href: string;
  imageSrc: string;
  name: string;
  delay?: number;
}

export default function PartnerLogo({ href, imageSrc, name, delay = 0 }: PartnerLogoProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="relative w-full h-24">
        <Image
          src={imageSrc}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </motion.a>
  );
}
