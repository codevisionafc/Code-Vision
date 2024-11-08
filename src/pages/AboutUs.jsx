import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const clubInfo = {
    story:
      'CODE VISION was established in 2020 with the vision of creating a community of passionate coders. What started as a small group of enthusiasts has now grown into one of the most active technical clubs on campus.',
    tagline: 'Innovate. Code. Excel.',
    motto:
      'An adobe for coders - representing our commitment to providing a nurturing space for coding enthusiasts.',
    founder: 'Founded by John Smith, Class of 2020',
  };

  const leadership = [
    {
      position: 'President',
      name: 'Dr. Sarah Johnson',
      photo: '/placeholder.jpg',
    },
    {
      position: 'Vice President',
      name: 'Prof. Michael Chen',
      photo: '/placeholder.jpg',
    },
    {
      position: 'Convener',
      name: 'Dr. Emily Brown',
      photo: '/placeholder.jpg',
    },
    { position: 'SCO', name: 'David Wilson', photo: '/placeholder.jpg' },
    { position: 'Joint SCO', name: 'Lisa Anderson', photo: '/placeholder.jpg' },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey and mission"
      />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4">
            <p>{clubInfo.story}</p>
            <div className="border-l-4 border-white/20 pl-4">
              <p className="text-xl font-semibold">{clubInfo.tagline}</p>
              <p className="opacity-80">{clubInfo.motto}</p>
            </div>
            <p className="text-sm opacity-80">{clubInfo.founder}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-6">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full bg-white/10 mb-4"></div>
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-sm opacity-80">{leader.position}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
