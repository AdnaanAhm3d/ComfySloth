import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'Home',
    url: '/',
  },
  {
    id: 2,
    text: 'About',
    url: '/about',
  },
  {
    id: 3,
    text: 'Products',
    url: '/products',
  },

  {
    id: 4,
    text: 'Contact Us',
    url: '/contact',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: `ComfySloth's mission is to offer exceptional comfort to our customers at an affordable price point. We strive to provide a wide range of high-quality furniture options that meet the diverse needs and preferences of our customers, while maintaining our commitment to affordability`,
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: `ComfySloth's vision is to become the leading provider of affordable and comfortable furniture to customers across the country. We aim to ensure that every individual, regardless of their location or financial status, can enjoy the comfort and quality of our furniture.`,
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: `Comfy Store has a rich history dating back to the 1980s, when it first opened its doors to customers. Over the years, it has grown to become a trusted source of high-quality and comfortable furniture, serving countless customers and building a strong reputation for excellence.`,
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
