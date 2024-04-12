import { Container, Menu } from '../components'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Schedule() {

  const dates = [
    ['Sun', 5],
    ['Mon', 6],
    ['Tue', 7],
    ['Wed', 8],
    ['Thu', 9]
  ]

  const [activeDate, setActiveDate] = useState(6);

  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Container className='flex flex-col items-center justify-start gap-4 relative h-[100vh]'>
      <h1 className='text-2xl font-bold mt-10'>Workout Schedule</h1>
      <p className='space-x-3'><FontAwesomeIcon icon={faAngleLeft} /><span>Feb 2024</span> <FontAwesomeIcon icon={faAngleRight} /></p>
      <div className='w-full flex items-center justify-center gap-3'>
        {dates.map((date, index) => <div key={index} className={`py-3 px-4 flex flex-col items-center cursor-pointer rounded-lg ${activeDate === date[1] ? 'from-[#95BEFF] to-[#7B91FF] bg-gradient-to-r text-white' : 'bg-transparent text-black'} `} onClick={() => setActiveDate(date[1])} >
          <p className='text-sm'>{date[0]}</p>
          <h1 className='text-xl font-medium'>{date[1]}</h1>
        </div> )}
      </div>
      <div className='w-full flex flex-col items-center justify-center' >
        {times.map((time, index) => <div key={index} className='w-full border-b-2 border-gray-200'>
          <span className='ml-6 font-medium text-[#2C2B2B] text-sm'>{time+':00 AM'}</span>
        </div>)}
      </div>
      <NavLink to='/android8' className='size-[63px] rounded-full bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2] flex items-center justify-center absolute right-10 top-[50%]'>
        <FontAwesomeIcon icon={faPlus} />
      </NavLink>
      <Menu />
    </Container>
  )
}

export default Schedule