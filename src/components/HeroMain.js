import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Marquee from 'react-fast-marquee'
import { motion, variants } from 'framer-motion'

// TEST

// OVER

const HeroMain = () => {
  const [marquee, setMarquee] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     // setMarquee(true)
  //     console.log(`turn it on`)
  //   }, 2000)
  // }, [])

  // transition={{
  //       duration: 0.8,
  //       delay: 0.5,
  //       ease: [0, 0.71, 0.2, 1.01]
  //     }}

  const ComfortComp = ({ disabled }) => {
    return (
      <motion.span
        variants={disabled ? null : container}
        initial='initial'
        animate='animate'
        className={`marquee_inner`}
      >
        <motion.span variants={item} className='comfort_span rls'>
          &nbsp;C
        </motion.span>
        <motion.span variants={item} className='comfort_span rls'>
          o
        </motion.span>
        <motion.span variants={item} className='comfort_span rls'>
          m
        </motion.span>
        <motion.span variants={item} className='comfort_span'>
          f
        </motion.span>
        <motion.span variants={item} className='comfort_span rls'>
          o
        </motion.span>
        <motion.span variants={item} className='comfort_span gls'>
          r
        </motion.span>
        <motion.span variants={item} className='comfort_span'>
          t
        </motion.span>
      </motion.span>
    )
  }

  const DesignedComp = ({ title }) => {
    return (
      <motion.div
        variants={container}
        initial='initial'
        animate='animate'
        className='hero-sub-1'
      >
        {[...title].map((letter) => {
          return (
            <motion.span variants={item} className='designed_span rls'>
              {letter}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  const container = {
    animate: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  const para = {
    last: {
      transition: {
        delayChildren: 0.5,
      },
    },
  }

  const parachildren = {
    first: { opacity: 0, x: 400 },
    last: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  }

  return (
    <>
      <div className='hero-main-div'>
        <div className='hero-div-1'>
          <motion.div className='hero-sub-1'>
            <DesignedComp title='Designed' />
          </motion.div>

          <motion.div
            className='hero-sub-2-big-screen'
            variants={para}
            initial='first'
            animate='last'
          >
            <motion.span variants={parachildren} className='hero_para-big'>
              <p>
                A place to dream, specialize, create, <br />
                and design a comfort beyond imagination.
              </p>
              <Link to='/products'>
                <button className='hero_button'>Shop Now</button>
              </Link>
            </motion.span>
          </motion.div>
        </div>

        <div className='hero-div-2'>
          <div className='marquee'>
            <motion.span
              className={`marquee_inner ${
                marquee === true ? 'scrollings' : 'null'
              }`}
            >
              <ComfortComp />
              <ComfortComp disabled='disabled' />
              <ComfortComp disabled='disabled' />
            </motion.span>
          </div>
        </div>

        <motion.div
          className='hero-sub-2-small-screen'
          variants={para}
          initial='first'
          animate='last'
        >
          <motion.span variants={parachildren} className='hero_para-small'>
            <p>
              A place to dream, specialize, create, and design a comfort beyond
              imagination.
            </p>
            <Link to='/products'>
              <button className='hero_button'>Shop Now</button>
            </Link>
          </motion.span>
        </motion.div>
        {/* <AnimatedLetters title='example' /> */}
      </div>
    </>
  )
}

export default HeroMain
