import { Link } from 'react-router-dom';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../assets/logo.png';
import longLogo from '../assets/logo code vision.png';
import { FaF } from 'react-icons/fa6';

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
      icon: FaFacebook,
      href: 'https://www.facebook.com/Cv.bcet/',
      label: 'Facebook',
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/channel/UChKbL22CrdIA0bTpYOip6nA',
      label: 'YouTube',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:codevisionafc@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer class="p-4  sm:p-6 bg-black/20 mt-16">
      <div class="mx-auto max-w-screen-xl">
        <div class="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-10 rounded-lg"
                alt="FlowBite Logo"
              />
              <img src={longLogo} className="h-8" alt="FlowBite Logo" />
            </Link>
          </div>

          <div class="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3  w-full max-w-[600px]">
            <div className="col-span-2 grid grid-cols-2 gap-6 sm:gap-6">
              <h2 class="text-lg font-semibold col-span-2 uppercase ">Pages</h2>
              <ul>
                <li class="mb-4">
                  <Link to="/" class="hover:underline">
                    Home{' '}
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/about-us" class="hover:underline">
                    About Us{' '}
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/events" class="hover:underline">
                    Events{' '}
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/members" class="hover:underline">
                    Members{' '}
                  </Link>
                </li>
              </ul>
              <ul>
                <li class="mb-4">
                  <Link to="/alumni" class="hover:underline">
                    Almuni{' '}
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/gallery" class="hover:underline">
                    Gallery{' '}
                  </Link>
                </li>
                <li class="mb-4">
                  <Link to="/contact-us" class="hover:underline">
                    Contact Us{' '}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-lg font-semibold  uppercase ">Follow us</h2>
              <ul>
                <li class="mb-4">
                  <a
                    href={socialLinks[0].href}
                    target="_blank"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={socialLinks[1].href}
                    target="_blank"
                    class="hover:underline "
                  >
                    Linkdin
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={socialLinks[2].href}
                    target="_blank"
                    class="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={socialLinks[3].href}
                    target="_blank"
                    class="hover:underline "
                  >
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={socialLinks[4].href}
                    target="_blank"
                    class="hover:underline "
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto  " />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm  sm:text-center ">
            © 2024{' '}
            <a href="https://flowbite.com" class="hover:underline">
              Code Vision
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-white hover:text-white/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
