import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { useForm } from 'react-hook-form'

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data

    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Subject: ', subject)
    console.log('Message: ', message)
  }

  return (
    <div className='contact-form'>
      <div className='form-container'>
        <div className=''>
          <form
            id='contact-form'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className='contactForm'
          >
            {/* Row 1 of form */}
            <div className='row formRow flexer'>
              <div className='name-col'>
                <input
                  type='text'
                  name='name'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please enter your name',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less',
                    },
                  })}
                  className='form-control formInput'
                  placeholder='Name'
                ></input>
                {errors.name && (
                  <span className='errorMessage'>{errors.name.message}</span>
                )}
              </div>
              <div className='email-col'>
                <input
                  type='email'
                  name='email'
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                  className='form-control formInput'
                  placeholder='Email address'
                ></input>
                {errors.email && (
                  <span className='errorMessage'>
                    Please enter a valid email address
                  </span>
                )}
              </div>
            </div>
            <div className='row formRow '>
              <div className='subject-col'>
                <input
                  type='text'
                  name='subject'
                  {...register('subject', {
                    required: {
                      value: true,
                      message: 'Please enter a subject',
                    },
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters',
                    },
                  })}
                  className='form-control formInput'
                  placeholder='Subject'
                ></input>
                {errors.subject && (
                  <span className='errorMessage'>{errors.subject.message}</span>
                )}
              </div>
            </div>

            {/* Row 2 of form */}

            {/* Row 3 of form */}
            <div className='row formRow'>
              <div className='message-col'>
                <textarea
                  rows={3}
                  name='message'
                  {...register('message', {
                    required: true,
                  })}
                  className='form-control formInput message'
                  placeholder='Message'
                ></textarea>
                {errors.message && (
                  <span className='errorMessage'>Please enter a message</span>
                )}
              </div>
            </div>
            <div className='row formRow'>
              <button className='submit-btn' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
