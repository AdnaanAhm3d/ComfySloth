import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './hero.css'
import './contact.css'

import { AnimatePresence } from 'framer-motion/dist/framer-motion'
// import { AnimatePresence } from 'framer-motion'

import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='dev-n6d0281h5e0rkwlo.us.auth0.com'
    clientId='BDDyUoTNtso3ltZM5pgG25Yq7f3I9rlH'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <AnimatePresence>
              <App />
            </AnimatePresence>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
