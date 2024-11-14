import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/codevisionafc',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/codevision-bcet',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/codevisionbcet/',
      label: 'Instagram',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:codevisionafc@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-black/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">CODE VISION</h2>
            <p className="text-sm opacity-80">An adobe for coders</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-white hover:text-white/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
