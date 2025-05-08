export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Greetings, I'm John Wanyungu</h1>
        <p className="text-xl text-gray-700 mb-8">I'm a dedicated public health professional with over 15 years of experience in community health systems strengthening.</p>
        
        <div className="mb-8">
          <p className="text-lg mb-4">Areas of Expertise:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Project Management',
              'Grants Management',
              'Strategic Information Management',
              'Quality Management',
              'Health Systems Management'
            ].map((skill, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg flex items-center space-x-2">
                <span className="text-blue-500">•</span>
                <span className="text-gray-800">{skill}</span>
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
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Connect With Me</h2>
        <div className="flex flex-wrap gap-4">
          {[
            { href: 'https://www.linkedin.com/in/john-wanyungu-749606124/', text: 'LinkedIn' },
            { href: 'https://twitter.com', text: 'Twitter' },
            { href: 'https://www.researchgate.net/scientific-contributions/John-Wanyungu-81424825', text: 'ResearchGate' },
            { href: 'mailto:jwangungu@gmail.com', text: 'Email' },
            { href: 'https://wa.me/254728250712', text: 'WhatsApp' }
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {link.text}
            </a>
          ))}
        </div>
      </section>

      <footer className="text-center text-gray-600 mt-16">
        <p>© 2025 JOHN-WANYUNGU.COM</p>
      </footer>
    </main>
  );
}
