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
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-sky-500 whitespace-nowrap"
          >
            Greetings, I&apos;m John Wanyungu
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 space-y-4"
          >
            <p className="mb-6 text-2xl font-medium text-gray-900">
              I&apos;m a dedicated public health professional with over 15 years of experience in community health systems strengthening.
            </p>
            <div className="text-center">
              <p className="font-semibold mb-3 italic font-serif text-lg">He has expertise in the following fields:</p>
              <ul className="list-none space-y-3 inline-block text-left">
                {[
                  'Project Management',
                  'Grants Management',
                  'Strategic Information Management',
                  "Quality Management",
                  'Health Systems Management'
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center text-gray-700 italic font-serif"
                  >
                    <span className="text-sky-500 mr-3 text-xl">•</span>
                    <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">About</h2>
          <div className="space-y-6 text-gray-700">
            <p>John Wanyungu currently serves as the Deputy Head of the Division of Community Health Services at Kenya's Ministry of Health, where he oversees monitoring, evaluation, surveillance, and research initiatives.</p>
            <p>Wanyungu has been instrumental in implementing the National Community Health Strategy and pioneering digital health innovations such as the electronic Community Health Information System (eCHIS), which enhances data-driven decision-making and service delivery at the grassroots level.</p>
            <p>His extensive career includes significant contributions to HIV/AIDS research and data systems improvement, particularly through his work with the National AIDS Control Programme (NASCOP). Wanyungu has co-authored several studies on voluntary counseling and testing (VCT) services, focusing on HIV epidemiology and the optimization of data collection for better health outcomes.</p>
            <p>A graduate of the Liverpool School of Tropical Medicine, Wanyungu has also led initiatives like the Kenya Community Scorecard, a participatory tool that empowers communities to provide feedback on health services, thereby fostering accountability and continuous improvement in healthcare delivery.</p>
              name="Lwala Community Alliance"
              delay={0.4}
            />
            <PartnerLogo
              href="https://www.nascop.or.ke"
              imageSrc="/images/nascop.png"
              name="NASCOP"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <SocialLink
              href="https://www.linkedin.com/in/john-wanyungu-749606124/"
              icon={<FaLinkedin className="text-4xl text-blue-600" />}
              text="LinkedIn"
              delay={0.1}
            />
            <SocialLink
              href="https://twitter.com"
              icon={<FaTwitter className="text-4xl text-blue-400" />}
              text="Twitter"
              delay={0.2}
            />
            <SocialLink
              href="https://www.researchgate.net/scientific-contributions/John-Wanyungu-81424825"
              icon={<FaResearchgate className="text-4xl text-blue-800" />}
              text="ResearchGate"
              delay={0.3}
            />
            <SocialLink
              href="mailto:jwangungu@gmail.com"
              icon={<FaEnvelope className="text-4xl text-red-500" />}
              text="Email"
              delay={0.4}
            />
            <SocialLink
              href="https://wa.me/254728250712"
              icon={<FaWhatsapp className="text-4xl text-green-500" />}
              text="WhatsApp"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} JOHN-WANYUNGU.COM</p>
        </div>
      </footer>
    </div>
  );
}
