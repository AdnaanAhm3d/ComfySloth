import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { MotionAdvancedProps, motion } from 'framer-motion'
// TEST

// OVER

const HeroMain = () => {
  const [marquee, setMarquee] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      // setMarquee(true)
      console.log(`turn it on`)
    }, 2000)
  }, [])

  const spring = {
    type: 'spring',
    damping: 10,
    stiffness: 100,
  }

  const variants = {
    active: {
      backgroundColor: '#f00',
    },
    inactive: {
      backgroundColor: '#fff',
      transition: { duration: 2, delayChildren: 0.2 },
    },
  }

  // transition={{
  //       duration: 0.8,
  //       delay: 0.5,
  //       ease: [0, 0.71, 0.2, 1.01]
  //     }}

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 320, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  const ComfortComp = () => {
    return (
      <motion.span
        variants={container}
        initial='hidden'
        animate='show'
        className={`marquee_inner`}
      >
        <motion.span variants={item} className='comfort_span rls'>
          C
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
      <motion.div className='hero-sub-1'>
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

  return (
    <>
      <div className='hero-main-div'>
        <div className='hero-div-1'>
          <motion.div className='hero-sub-1'>
            <DesignedComp title='Designed' />
            {/* <motion.span className='designed_span rls'>D</motion.span>
            <motion.span variants={item} className='designed_span rls'>
              e
            </motion.span>
            <motion.span variants={item} className='designed_span rls'>
              s
            </motion.span>
            <motion.span variants={item} className='designed_span rls'>
              i
            </motion.span>
            <motion.span variants={item} className='designed_span rls'>
              g
            </motion.span>
            <motion.span variants={item} className='designed_span'>
              n
            </motion.span>
            <motion.span variants={item} className='designed_span'>
              e
            </motion.span>
            <motion.span variants={item} className='designed_span'>
              d
            </motion.span> */}
          </motion.div>

          <div className='hero-sub-2-big-screen'>
            <span className='hero_para-big'>
              <p>
                A place to dream, specialize, create, <br />
                and design a comfort beyond imagination.
              </p>
              <Link to='/products'>
                <button className='hero_button'>Shop Now</button>
              </Link>
            </span>
          </div>
        </div>

        <div className='hero-div-2'>
          <div className='marquee'>
            <motion.span
              className={`marquee_inner ${
                marquee === true ? 'scrollings' : 'null'
              }`}
            >
              {/* <motion.span variants={item} className='comfort_span rls'>
                C
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
              </motion.span> */}
              <ComfortComp />
              <ComfortComp />
              <ComfortComp />
            </motion.span>
          </div>
        </div>

        <div className='hero-sub-2-small-screen'>
          <span className='hero_para-small'>
            <p>
              A place to dream, specialize, create, and design a comfort beyond
              imagination.
            </p>
            <Link to='/products'>
              <button className='hero_button'>Shop Now</button>
            </Link>
          </span>
        </div>
        {/* <AnimatedLetters title='example' /> */}
      </div>
    </>
  )
}

export default HeroMain
