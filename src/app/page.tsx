"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaResearchgate } from 'react-icons/fa6';
import SocialLink from '../components/SocialLink';
import PartnerLogo from '../components/PartnerLogo';
import HighlightsCarousel from '../components/HighlightsCarousel';
import Navigation from '../components/Navigation';

const highlights = [
  {
    id: 1,
    imageSrc: '/images/john wanyungu 2.jpg',
    description: 'Mr John Wanyungu addressing a health conference on community health initiatives and strategies. His expertise in public health has been instrumental in shaping community health policies.',
    hashtags: ['PublicHealth', 'CommunityHealth', 'HealthPolicy']
  },
  {
    id: 2,
    imageSrc: '/images/jow.jpeg',
    description: 'Participating in a panel discussion with key stakeholders in the health sector. The discussion focused on strengthening community health systems and improving healthcare delivery at the grassroots level.',
    hashtags: ['HealthcareLeadership', 'Collaboration', 'CommunityEngagement']
  },
  {
    id: 3,
    imageSrc: '/images/john wanyungu 3.jpg',
    description: 'Meeting with health officials to discuss strategic partnerships and initiatives for advancing community health programs in Kenya.',
    hashtags: ['HealthPartnerships', 'Leadership', 'HealthcareInnovation']
  }
];

export default function Home() {
  return (
    <div>
      <h1>John Wanyungu</h1>
      <p>Public Health Professional</p>
    </div>
  );
}
