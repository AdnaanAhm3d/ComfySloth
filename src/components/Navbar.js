import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo-2.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
// import { BsPerson } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
// import { BsCart2 as Cart2 } from 'react-icons/bs'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import Cart from './icons/Cart'
import Person from './icons/Person'

const Nav = () => {
  const { closeSidebar, openSidebar } = useProductsContext()
  const { myUser } = useUserContext()

  const windowWidth = window.innerWidth

  return (
    <div className='nav-main'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' className='nav-logo' />
          </Link>
          {/* <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button> */}
        </div>

        <ul className='nav-links 1062'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li className='nav-color' key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {/* {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )} */}
        </ul>

        <div className='nav-btns'>
          <CartButtons className='1062' />
        </div>
      </div>
    </div>
  )
}

export default Nav
