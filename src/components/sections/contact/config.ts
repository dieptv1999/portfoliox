import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'diep.tv1999@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/dieptv1999',
      Icon: SiGithub
    },
    {
      name: 'X',
      href: 'https://x.com/techlensglobal',
      Icon: SiX
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/techlens/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
