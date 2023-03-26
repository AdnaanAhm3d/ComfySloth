import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper className='section section-center'>
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    // padding: 0.25rem 0.5rem;
    padding: 10px 25px 10px 25px;

    background: var(--clr-primary-5);
    color: var(--clr-white);
    // border-radius: var(--radius);
    border-radius: 10px;

    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }

  .link-btn:hover {
    background: var(--clr-white);
    color: var(--clr-primary-5);
    transition: var(--transition);
    border: 1px solid;
  }

  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
