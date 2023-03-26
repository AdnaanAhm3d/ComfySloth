import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext()
  const { myUser, loginWithRedirect } = useUserContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to='/checkout' className='proceed-btn c-btn'>
            proceed to checkout
          </Link>
        ) : (
          <button
            type='button'
            className='login-btn c-btn'
            onClick={loginWithRedirect}
          >
            login
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 1rem;
  
  display: flex;
// height:300px;
// background:grey;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  .login-btn {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    border: 1px solid;
    border-radius: 10px;
    padding: 10px 25px 10px 25px;
    transition: var(--transition);
    margin-top: 1rem;
    cursor: pointer;
  }

  .Login:hover {
    background: #252525;
    color: var(--nbackground);
  }
  
  .proceed-btn{
    margin-top:2rem;s
  }
`

export default CartTotals
