import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Members() {
  const members = {
    governors: [
      { name: 'John Smith', branch: 'Computer Science' },
      { name: 'Emma Wilson', branch: 'Information Technology' },
      { name: 'Michael Brown', branch: 'Electronics' },
    ],
    organizers: [
      { name: 'Sarah Johnson', branch: 'Computer Science' },
      { name: 'David Lee', branch: 'Information Technology' },
      { name: 'Lisa Chen', branch: 'Electronics' },
    ],
    coordinators: [
      { name: 'James Wilson', branch: 'Computer Science' },
      { name: 'Emily Davis', branch: 'Information Technology' },
      { name: 'Robert Taylor', branch: 'Electronics' },
    ],
  };

  const MemberTable = ({ title, members }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-8"
    >
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Branch</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b border-white/5">
                <td className="py-2">{member.name}</td>
                <td className="py-2">{member.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      <PageHeader title="Members" subtitle="Meet our team" />

      <div className="section-container">
        <MemberTable title="Governors (4th Year)" members={members.governors} />
        <MemberTable
          title="Organizers (3rd Year)"
          members={members.organizers}
        />
        <MemberTable
          title="Coordinators (2nd Year)"
          members={members.coordinators}
        />
      </div>
    </div>
  );
}
