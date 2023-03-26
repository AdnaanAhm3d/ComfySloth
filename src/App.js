import { motion } from 'framer-motion/dist/framer-motion'
// import { motions } from 'framer-motion'
// import { motion } from 'framer-motion'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Sidebar, Footer, Contact } from './components'
import Sloth from './components/icons/Sloth'
import Loader from './components/Loader'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import { useProductsContext } from './context/products_context'

import ContactPage from './pages/ContactPage'

function App() {
  // const [load, setLoad] = useState(true)
  const { load, setLoad } = useProductsContext()

  useEffect(() => {
    if (windowWidth > 1060) {
      setTimeout(() => {
        setLoad(false)
      }, 4000)
    }
  }, load)

  //     setLoading(false)
  //   }, 2000)
  // }, [loading])
  const windowWidth = window.innerWidth

  return (
    <AuthWrapper>
      <Router>
        <AnimateSharedLayout type='crossfade'>
          <AnimatePresence>
            {load === true && windowWidth > 1060 ? (
              <motion.div
                key='modal'
                exit={{ opacity: 0, y: -1000, transition: { duration: 0.5 } }}
              >
                <Loader />
              </motion.div>
            ) : (
              ''
            )}
          </AnimatePresence>
          <Sidebar />
          <div className='noscroll'>
            <Sloth />
          </div>
          <Navbar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route exact path='/products/:id' children={<SingleProduct />} />
            <Route exact path='/contact'>
              <ContactPage />
            </Route>
            <PrivateRoute exact path='/checkout'>
              <Checkout />
            </PrivateRoute>
            <Route path='*'>
              <Error />
            </Route>
          </Switch>
          <Footer />
        </AnimateSharedLayout>
      </Router>
    </AuthWrapper>
  )
}

export default App
