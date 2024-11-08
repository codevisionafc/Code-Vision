import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Event() {
  const events = [
    {
      name: 'C Workshop',
      details: {
        overview:
          'A comprehensive workshop series on C programming fundamentals.',
        eligibility: 'Open to all first-year students',
        duration: '4 weeks',
        subEvents: [
          'Basic Syntax',
          'Data Structures',
          'Algorithms',
          'Project Work',
        ],
      },
    },
    {
      name: 'Console',
      details: {
        overview: 'Annual coding competition testing problem-solving skills.',
        eligibility: 'All undergraduate students',
        duration: '2 days',
        subEvents: ['Code Sprint', 'Debug Battle', 'Algorithm Challenge'],
      },
    },
    {
      name: 'CodeJam',
      details: {
        overview: 'Intensive coding hackathon with real-world problems.',
        eligibility: 'Teams of 2-4 students',
        duration: '24 hours',
        subEvents: ['Ideation', 'Development', 'Presentation'],
      },
    },
    {
      name: 'Recruitment',
      details: {
        overview: 'Process to join CODE VISION as a core team member.',
        eligibility: 'Second-year students',
        duration: '2 weeks',
        subEvents: ['Technical Round', 'Interview', 'Task Round'],
      },
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Events"
        subtitle="Explore our technical events and activities"
      />

      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="aspect-square bg-white/10 rounded-lg flex items-center justify-center text-xl font-bold"
            >
              {event.name}
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <h2 className="text-2xl font-bold mb-6">{event.name}</h2>
              <div className="space-y-4">
                <p className="text-lg">{event.details.overview}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Eligibility</h3>
                    <p className="opacity-80">{event.details.eligibility}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Duration</h3>
                    <p className="opacity-80">{event.details.duration}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Sub Events</h3>
                  <ul className="list-disc list-inside opacity-80">
                    {event.details.subEvents.map((subEvent, idx) => (
                      <li key={idx}>{subEvent}</li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-video bg-white/5 rounded-lg"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
