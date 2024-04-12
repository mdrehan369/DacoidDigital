import React from 'react'
import { Button, Container } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function WelcomePage({ image, title, description, to }) {
  return (
    <Container className='flex flex-col items-center justify-start p-6 gap-2'>
      <h1 className='text-[#9FB2FF] underline self-end'>Skip</h1>
      <div className='w-full h-[50%] flex items-center justify-center'>
        <img src={image} className='w-[282px]' />
      </div>
      <h1 className='text-[#2C2B2B] text-[20px] font-bold self-start'>{title}</h1>
      <p className='text-[#787878] font-medium text-[16px]'>{description}</p>
      <NavLink to={to} className='self-end'><Button className='rounded-full size-[60px] mt-5 justify-self-end'>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button></NavLink>
    </Container>
  )
}

export default WelcomePage