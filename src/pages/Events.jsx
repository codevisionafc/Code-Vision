import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Events() {
  document.title = 'CODE VISION | Events';
  const events = [
    {
      name: 'C Workshop',
      details: {
        targetAudience: 'First-year students',
        objective: 'Introduce programming basics through hands-on coding in C.',
        agenda: [
          'Duration: 4-5 days, include important C topics.',
          'Intro to Programming & C: Basics of programming, C syntax, and structure.',
          'Hands-on Exercises Part 1: Simple coding tasks with guidance.',
          'Hands-on Exercises Part 2: Loops and conditional statements practice.',
          'Q&A & Peer Collaboration: Address questions, troubleshoot, and collaborate.',
          'Wrap-Up & Feedback: Recap, gather feedback, and share resources.',
        ],
        extras: [
          'Support team for assistance.',
          'Handouts and resource links.',
          'Option for continued learning via a follow-up Q&A and networking.',
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

      <div className="container mx-auto px-2 mt-10">
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
          {/* C Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6">{events[0].name}</h2>
            <div className="space-y-4">
              <p className="text-lg">{events[0].details.objective}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <h3 className="font-semibold mb-2">Target Audience</h3>
                  <p className="opacity-80">
                    {events[0].details.targetAudience}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Agenda</h3>
                  <ul className="list-disc list-inside opacity-80 space-y-2">
                    {events[0].details.agenda.map((subEvent, idx) => (
                      <li key={idx} className="whitespace-normal break-words">
                        {subEvent}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div>
                  <h3 className="font-semibold mb-2">Extras</h3>
                  <ul className="list-disc list-inside opacity-80 space-y-2">
                    {events[0].details.extras.map((subEvent, idx) => (
                      <li key={idx} className="whitespace-normal break-words">
                        {subEvent}
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>

              <div className="aspect-video bg-white/5 rounded-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
