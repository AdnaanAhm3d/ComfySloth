import React from 'react'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { BsPerson, BsCart2 } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { CgShoppingCart } from 'react-icons/cg'
import Cart from './icons/Cart'
import Person from './icons/Person'
import ToggleBtn from './icons/ToggleBtn'
// import { BsFillCalendar2DateFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar, openSidebar } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <div className='cart-btn-wrapper'>
      {/* <h2>hellos</h2> */}
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <span className='cart-container'>
          {/* <FontAwesomeIcon icon='fa-regular fa-cart-shopping' /> */}
          <Cart className='cartIcon profile-icon' />
          {/* <RiShoppingCart2Line /> */}
          {/* <AiOutlineShoppingCart /> */}
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button type='button' className='auth-btn'>
          <span
            className='SignIn'
            onClick={() => {
              clearCart()
              localStorage.removeItem('user')
              logout({ returnTo: window.location.origin })
            }}
          >
            Log out
          </span>
          <Link to='/checkout'>
            <Person className='personIcon profile-icon' />
          </Link>
        </button>
      ) : (
        <button type='button' className='auth-btn' onClick={loginWithRedirect}>
          <span className='SignIn'>Sign in</span>
          <Person className='personIcon profile-icon' />
        </button>
      )}
      <div className='v-line'></div>
      <div onClick={openSidebar}>
        <ToggleBtn onClick={openSidebar} />
      </div>
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    // border: solid;
    border-color: black;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  // .auth-btn {
  //   display: flex;
  //   align-items: center;
  //   background: transparent;
  //   border-color: transparent;
  //   font-size: 1.5rem;
  //   cursor: pointer;
  //   color: var(--clr-grey-1);
  //   letter-spacing: var(--spacing);
  //   svg {
  //     margin-left: 5px;
  //   }
  }
`
export default CartButtons
