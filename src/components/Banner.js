import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import { motion } from 'framer-motion/dist/framer-motion'

import { AnimatePresence } from 'framer-motion/dist/framer-motion'
// import { AnimatePresence } from 'framer-motion'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
}

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
}

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])
  return (
    <motion.div className='banner' variants={banner}>
      <BannerRowTop className='' title={'Designed'} />
      <BannerRowCenter title={'Comfort'} playMarquee={playMarquee} />
      {/* <h2 className='damn'>Damn</h2> */}
      {/* <BannerRowBottom title={'studio'} /> */}
    </motion.div>
  )
}

const AnimatedLetters = ({ title, disabled, classer }) => (
  <motion.span
    className={`row-title ${classer}`}
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter) => (
      <motion.span
        className='row-letter'
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
)

const BannerRowTop = ({ title }) => {
  return (
    <div className={'banner-row '}>
      <div className='row-col '>
        <AnimatedLetters classer={`d-text`} title={title} />
      </div>
    </div>
  )
}

const BannerRowBottom = ({ title }) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll'
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 1,
            delay: 1.8,
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  )
}

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && 'animate'}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner'
      >
        <AnimatedLetters title={title} disabled classer={`c-text`} />
        <AnimatedLetters title={title} classer={`c-text`} />
        <AnimatedLetters title={title} disabled classer={`c-text`} />
        <AnimatedLetters title={title} disabled classer={`c-text`} />
      </motion.div>
    </div>
  )
}

export default Banner
