import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    'Gain Knowledge',
    'Learning new things',
    'Leadership skills',
    'Enhance coding skills',
    'Build Network',
  ];

  const skills = [
    'Coding',
    'Development',
    'Communication',
    'Leadership',
    'Event Management',
    'Team Work',
  ];

  const events = [
    {
      title: 'C-Workshop',
      description: 'Master the fundamentals of C programming with hands-on exercises.',
    },
    {
      title: 'Console',
      description: 'Explore command-line interfaces and system programming.',
    },
    {
      title: 'CodeJam',
      description: 'Competitive programming event to test your coding skills.',
    },
    {
      title: 'Recruitment',
      description: 'Join our team and be part of something amazing.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-container">
        <div className="aspect-video bg-black/20 rounded-lg mb-12">
          {/* Video placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <p>Orientation Video</p>
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={cardVariants}
          className="card"
        >
          <h2 className="text-2xl font-bold mb-6">Why join CODE VISION?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-lg">
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-container grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 rounded-lg overflow-hidden">
          {/* Members photo placeholder */}
          <div className="aspect-square flex items-center justify-center">
            <p>Members Photo</p>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-6">
            CODE VISION is a dynamic coding club dedicated to fostering technical excellence
            and leadership skills among students. We believe in learning by doing and
            creating opportunities for growth.
          </p>
          <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors">
            Read more
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm opacity-80 mb-4">{event.description}</p>
              <button className="text-sm underline">Read more</button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <div className="card">
          <h2 className="text-2xl font-bold mb-6">What you will learn here?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}