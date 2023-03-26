import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Looking for the latest furniture trends, exclusive discounts, and
            design inspirations? Sign up for our newsletter today and receive
            20% off your first purchase! Be the first to know about new
            arrivals, promotions, and sale events.
          </p>
          <form
            className='contact-form'
            action='your form spree id'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='Enter Email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`

export default Contact
