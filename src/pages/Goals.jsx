import { NavLink } from 'react-router-dom'
import { Button, Container } from '../components'
import React from 'react'

function Goals() {

  const goals = ['Weight Loss', 'Muscle Gain', 'Flexibility and Mobility', 'General Fitness', 'Event - specific training', 'Mindfulness and Mental Health']

  return (
    <Container className='flex flex-col items-center justify-start gap-10'>
      <h1 className='text-2xl font-bold mt-10'>What are your goals?</h1>
      <div className='w-full flex flex-col items-center justify-start gap-4'>
        {goals.map((goal, index) => <div key={index} className='w-[90%] bg-[#F1F1F1] p-4 rounded-lg flex items-center justify-between'>
          <label htmlFor={goal} className='cursor-pointer font-medium'>{goal}</label>
          <input type='checkbox' id={goal} className='cursor-pointer checked:bg-sky-500 appearance-none size-[20px] border-[2px] border-[#7F7F7F] rounded' />
        </div>)}
      </div>
      <NavLink to='/android9' className='w-full flex items-center justify-center'>
        <Button className='w-[90%] h-[50px] rounded-lg'>
          Confirm
        </Button>
      </NavLink>
    </Container>
  )
}

export default Goals