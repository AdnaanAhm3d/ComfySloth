import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import { MotionAdvancedProps, motion } from 'framer-motion'

const FeaturedProducts = () => {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry.target)
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show')
  //     } else {
  //       entry.target.classList.remove('show')
  //     }
  //   })
  // })

  // const hiddenElements = document.querySelectorAll('.hidden')
  // hiddenElements.forEach((el) => observer.observe(el))

  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeIn', duration: 0.5 }}
      className='featurer'
    >
      <Wrapper className='section'>
        <motion.div className='title'>
          <h2>featured products</h2>
          <div className='underline'></div>
        </motion.div>
        <div className='section-center featured hidden '>
          {featured.slice(0, 3).map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </div>
        <Link to='/products' className='btn button-featured'>
          all products
        </Link>
      </Wrapper>
    </motion.div>
  )
}

const Wrapper = styled.section`
  @media (min-width: 1060px) {
    margin-top: 500px;
  }

  background: ##f0eff1;
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
