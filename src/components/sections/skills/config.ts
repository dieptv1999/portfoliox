import { Skill } from '@/types/skill';
import {
  SiAngular,
  SiFlutter,
  SiMariadb,
  SiNextdotjs,
  SiOracle,
  SiReact,
  SiShadcnui
} from '@icons-pack/react-simple-icons';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Web Development',
    // todo: use proper thumbnail pics
    thumbnail: '/images/skills/web-development.jpg',
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`,
    icons: [
      {
        Icon: SiNextdotjs,
        label: 'Next.js'
      },
      {
        Icon: SiReact,
        color: '#1783e1',
        label: 'Reactjs'
      },
      {
        Icon: SiAngular,
        label: 'Angular'
      },
      {
        Icon: SiShadcnui,
        label: 'Shadcn'
      },
    ]
  },
  {
    name: 'Backend Developer',
    thumbnail: '/images/skills/ui-ux-design.jpg',
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`
  },
  {
    name: 'Database Management',
    thumbnail: '/images/skills/database-management.jpg',
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`,
    icons: [
      {
        Icon: SiMariadb,
        label: 'MariaDB'
      },
      {
        Icon: SiOracle,
        color: 'red',
        label: 'Oracle'
      },
    ]
  },
  {
    name: 'Mobile Development',
    thumbnail: '/images/skills/mobile-development.jpg',
    description: `Mobile Development entails crafting apps for smartphones and tablets that are both visually appealing and highly functional. It includes a variety of technologies, frameworks, and best practices to provide a seamless user experience on mobile devices.`,
    icons: [
      {
        Icon: SiFlutter,
        color: '#1783e1',
        label: 'Flutter'
      },
      {
        Icon: SiReact,
        color: '#1783e1',
        label: 'React Native'
      },
    ]
  }
];

export { trimLen, skills };
