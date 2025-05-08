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
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="md:w-3/5 mt-8 md:mt-0"
        >
          <div className="relative w-72 h-72 md:w-[500px] md:h-[600px] mx-auto overflow-hidden">
            <Image
              src="/images/jow2.jpeg"
              alt="John Wanyungu"
              priority
              className="w-full h-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              width={800}
              height={900}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black mb-8 text-gray-900">About</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/5">
              <div className="relative w-full">
                <Image
                  src="/images/jwps.jpeg"
                  alt="John Wanyungu Portrait"
                  width={500}
                  height={600}
                  className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
            <div className="md:w-3/5 text-lg text-gray-700 space-y-6">
            <p>
              John Wanyungu currently serves as the Deputy Head of the Division of Community Health Services at Kenya's Ministry of Health, where he oversees monitoring, evaluation, surveillance, and research initiatives.
            </p>
            <p>
              Wanyungu has been instrumental in implementing the National Community Health Strategy and pioneering digital health innovations such as the electronic Community Health Information System (eCHIS), which enhances data-driven decision-making and service delivery at the grassroots level.
            </p>
            <p>
              His extensive career includes significant contributions to HIV/AIDS research and data systems improvement, particularly through his work with the National AIDS Control Programme (NASCOP). Wanyungu has co-authored several studies on voluntary counseling and testing (VCT) services, focusing on HIV epidemiology and the optimization of data collection for better health outcomes.
            </p>
            <p>
              A graduate of the Liverpool School of Tropical Medicine, Wanyungu has also led initiatives like the Kenya Community Scorecard, a participatory tool that empowers communities to provide feedback on health services, thereby fostering accountability and continuous improvement in healthcare delivery.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900">Recent Highlights</h2>
          <HighlightsCarousel highlights={highlights} />
        </div>
      </section>

      {/* Global Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6 text-gray-900">Global Vision and Empowerment</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Wanyungu's influence extends to advancing Universal Health Coverage (UHC) through strengthened community health systems and digital innovation. His broad global vision, paired with grassroots experience, positions him as a key driver of sustainable health development, data-driven policymaking, and inclusive service delivery in Africa and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Forge Strategic Health Partnerships",
                content: "Establish multi-level collaborations between governments, global health partners, NGOs, and development organizations to support community health systems and primary healthcare innovations critical to achieving UHC in Africa."
              },
              {
                title: "Align Stakeholder Interests for Health Equity",
                content: "Facilitate alignment among policymakers, health practitioners, development partners, and community stakeholders to advance common goals—ensuring equitable access to quality health services and empowering communities through participatory health models like community scorecards."
              },
              {
                title: "Facilitate Investment in Primary Health Infrastructure",
                content: "Champion investment in digital health infrastructure such as eCHIS (electronic Community Health Information System), ensuring real-time data flows, improved decision-making, and accountability at all levels of the health system."
              },
              {
                title: "Empower Community Health Workers and Systems",
                content: "Connect community health volunteers, local health leaders, and national policymakers with global best practices and technical resources, helping to scale efficient, people-centered primary healthcare across counties and underserved regions."
              },
              {
                title: "Advance Innovation in Public Health Systems",
                content: "Promote data-driven innovations and adaptive technologies in health monitoring, evaluation, and surveillance—reinforcing resilience, transparency, and effectiveness of health services within the broader UHC agenda."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300 ${index >= 3 ? 'lg:col-span-3/2' : ''}`}
                style={{
                  background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
                  boxShadow: '8px 8px 16px #e6e6e6, -8px -8px 16px #ffffff'
                }}
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 flex-grow">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black mb-12 text-center text-gray-900">Partners & Affiliations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <PartnerLogo
              href="https://amref.org"
              imageSrc="/images/amref.png"
              name="Amref Health Africa"
              delay={0.1}
            />
            <PartnerLogo
              href="https://www.health.go.ke"
              imageSrc="/images/community health services.jpg"
              name="Community Health Services"
              delay={0.2}
            />
            <PartnerLogo
              href="https://livinggoods.org"
              imageSrc="/images/living goods.jpeg"
              name="Living Goods"
              delay={0.3}
            />
            <PartnerLogo
              href="https://lwalacommunityalliance.org"
              imageSrc="/images/lwala.jpeg"
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
