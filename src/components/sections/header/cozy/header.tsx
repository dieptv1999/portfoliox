'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { background, opacity } from './anim';
import Nav from './nav';
import { SiGithub, SiLinkedin, SiX } from '@icons-pack/react-simple-icons';

interface HeaderProps {
  loader?: boolean;
}

const Header = ({ loader }: HeaderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.header
      className={styles.header}
      initial={{
        y: -80
      }}
      animate={{
        y: 0
      }}
      transition={{
        delay: loader ? 3.5 : 0, // 3.5 for loading, .5 can be added for delay
        duration: 0.8
      }}
    >
      <div className={styles.bar}>
        <div className={'flex gap-3'}>
          <Link href={'https://github.com/dieptv1999'} target={'_blank'}>
            <SiGithub size={18} />
          </Link>
          <Link href={'https://www.linkedin.com/in/techlens/'} target={'_blank'}>
            <SiLinkedin size={18} />
          </Link>
          <Link href={'https://x.com/techlensglobal'} target={'_blank'}>
            <SiX size={18} />
          </Link>
        </div>
        {/*<Link href="/" className="flex items-center justify-center">*/}
        {/*  <span className="text-md font-semibold transition-transform hover:translate-x-1 hover:translate-y-1">*/}
        {/*    {meta.author.name}*/}
        {/*  </span>*/}
        {/*</Link>*/}
        <div onClick={() => setIsActive(!isActive)} className={styles.el}>
          <div className={styles.label}>
            {/*<motion.p*/}
            {/*  variants={opacity}*/}
            {/*  animate={!isActive ? 'open' : 'closed'}*/}
            {/*>*/}
            {/*  Menu*/}
            {/*</motion.p>*/}
            <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
              Close
            </motion.p>
          </div>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
