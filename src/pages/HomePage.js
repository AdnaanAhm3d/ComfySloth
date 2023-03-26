import React, { useEffect, useState } from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'

import Banner from '../components/Banner'
import {
  MotionAdvancedProps,
  motion,
  AnimatePresence,
  AnimateSharedLayout,
} from 'framer-motion'
import HeroMain from '../components/HeroMain'
// import '../sass/main.scss'
import Loader from '../components/Loader'
import { useProductsContext } from '../context/products_context'

const HomePage = () => {
  const [marquee, setMarquee] = useState(false)
  const { load } = useProductsContext()

  useEffect(() => {
    if (load === false) {
      setMarquee(true)
    }
  }, [])

  useEffect(() => {
    if (windowWidth > 1060) {
      setTimeout(() => {
        setMarquee(true)
      }, 4000)
    }
  }, [])

  const windowWidth = window.innerWidth

  return (
    <motion.main>
      {marquee || windowWidth < 1060 ? <HeroMain /> : ''}
      {windowWidth > 1060 && (
        <motion.img
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 4.5 } }}
          src={require('../assets/imgs/1.jpg').default}
          className='img-main-home'
        />
      )}
      <FeaturedProducts />
      <Services />
      <Contact />
    </motion.main>
  )
}

export default HomePage
