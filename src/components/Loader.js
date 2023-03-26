import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { products_url as url } from '../utils/constants'
import { useProductsContext } from '../context/products_context'
// import mainIMg from 'src/assets/imgs/1.jpg'
// import { reactImg as imgg } from '../assets/imgs/1.jpg'

const Loader = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // const { fetchProducts } = useProductsContext()
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
  // }, [])

  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  }

  // const item = {
  //   hidden: { opacity: 0, y: 200 },
  //   show: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       ease: [0.6, 0.01, -0.05, 0.95],
  //       duration: 1.6,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //     y: -200,
  //     transition: {
  //       ease: 'easeInOut',
  //       duration: 0.8,
  //     },
  //   },
  // }

  const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  }

  const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: 500,
      scale: 2,
      transition: {
        ease: 'easeInOut',
        duration: 0.8,
      },
    },
  }

  const getData = async () => {
    const resp = await fetch(url)
    const datas = await resp.json()
    setData(datas)
  }

  getData()
  // console.log(data)

  return (
    <>
      {loading ? (
        <>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='exit'
            // animate={{ y: 200, transition: { duration: 2 } }}
            // exit={{ y: -200, transition: { duration: 2 } }}
            className='main-image-section'
          >
            <motion.img
              variants={item}
              src={require('../assets/imgs/2.jpeg').default}
              className='img-2'
            />
            <motion.img
              // layoutId='main-image-1'
              variants={itemMain}
              src={require('../assets/imgs/1.jpg').default}
              className='img-main'
            />
            <motion.img
              variants={item}
              src={require('../assets/imgs/3.jpeg').default}
              className='img-3'
            />
            <motion.img
              variants={item}
              src={require('../assets/imgs/4.jpeg').default}
              className='img-4'
            />
            <motion.img
              variants={item}
              src={require('../assets/imgs/5.jpeg').default}
              className='img-5'
            />
          </motion.div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export default Loader
