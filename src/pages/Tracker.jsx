import React from 'react';
import chart from "../assets/chart.png"
import { Container, Menu } from '../components';
import Ellipse53 from "../assets/Ellipse53.png"
import Ellipse54 from "../assets/Ellipse54.png"
import Ellipse55 from "../assets/Ellipse55.png"
import alert from "../assets/alert.png"

const toggle = (e) => {
  if (e.currentTarget.parentElement.classList.contains('justify-end')) {
    e.currentTarget.parentElement.classList.add('justify-start');
    e.currentTarget.parentElement.classList.remove('justify-end');
    e.currentTarget.parentElement.classList.add('bg-gray-300');
    e.currentTarget.parentElement.classList.remove('bg-green-500');
  } else {
    e.currentTarget.parentElement.classList.add('justify-end');
    e.currentTarget.parentElement.classList.remove('justify-start');
    e.currentTarget.parentElement.classList.add('bg-green-500');
    e.currentTarget.parentElement.classList.remove('bg-gray-300');
  }
}

const WorkoutTracker = () => {
  return (
    <Container className="bg-gray-100 relative min-h-screen flex flex-col items-center justify-start gap-6">
      {/* Header */}
      <h1 className="text-2xl mt-10 font-semibold">Workout Tracker</h1>

      {/* Calorie Chart */}
      <div className="flex-1 p-4">
        <img src={chart} />
      </div>

      <div className='w-[90%] rounded-lg flex items-center justify-center gap-4 p-3 from-[#819DFF47] to-[#10101000] bg-gradient-to-r'>
        <img src={alert} />
        <p className='text-sm'>You've burned fewer calories than yesterday. Time to get moving! </p>
      </div>

      <div className="p-4 w-full">
        <h2 className="text-lg font-semibold mb-2">Upcoming Workout</h2>
        <div className="bg-white shadow-md rounded-md p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={Ellipse53} alt="Workout Icon" className="h-8 w-8 mr-2" />
            <div>
              <p className="text-gray-800 font-semibold">Full Body Workout</p>
              <p className="text-gray-600 text-sm">Today 3pm</p>
            </div>
          </div>
          <div className="bg-green-500 rounded-full h-6 w-10 flex items-center justify-end p-1">
            <div className="bg-white rounded-full h-4 w-4" onClick={(e) => toggle(e)}></div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src={Ellipse54} alt="Workout Icon" className="h-8 w-8 mr-2" />
            <div>
              <p className="text-gray-800 font-semibold">Upper Body Workout</p>
              <p className="text-gray-600 text-sm">Feb 5, 3:30 pm</p>
            </div>
          </div>
          <div className="bg-gray-300 rounded-full h-6 w-10 flex items-center justify-start p-1">
            <div className="bg-white rounded-full h-4 w-4" onClick={(e) => toggle(e)}></div>
          </div>
        </div>
      </div>

      <div className="p-4 w-full">
        <h2 className="text-lg font-semibold mb-4">What Do You Want to Train</h2>
        <div className="w-full flex flex-col gap-4">
          <div className="bg-white w-full shadow-md rounded-md p-4 flex items-center justify-between bg-[#8CB1FF99]">
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-gray-800 font-semibold">Full Body Workout</p>
                <p className='text-sm text-gray-800 font-medium'>Arms</p>
                <p className='text-sm text-gray-800 font-medium'>Chest</p>
              </div>
              <img src={Ellipse55} alt="Workout Icon" className="h-12 w-12 mr-2" />
            </div>
          </div>
        </div>
      </div>

      <Menu />

    </Container>
  );
};

export default WorkoutTracker;