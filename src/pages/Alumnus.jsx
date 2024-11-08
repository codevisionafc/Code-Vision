import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Alumnus() {
  const alumni = {
    2024: ['John Smith', 'Emma Wilson', 'Michael Brown', 'Sarah Johnson'],
    2023: ['David Lee', 'Lisa Chen', 'James Wilson', 'Emily Davis'],
    2022: [
      'Robert Taylor',
      'Anna Martinez',
      'William Anderson',
      'Sophie Thomas',
    ],
  };

  const AlumniSection = ({ year, names }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-8"
    >
      <h2 className="text-2xl font-bold mb-6">{year} Passout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {names.map((name, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
            {name}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      <PageHeader title="Alumni" subtitle="Our distinguished former members" />

      <div className="section-container">
        {Object.entries(alumni).map(([year, names]) => (
          <AlumniSection key={year} year={year} names={names} />
        ))}
      </div>
    </div>
  );
}
