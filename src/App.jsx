import React from 'react'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
function App() {
  return (
    <div className='mx-auto  max-w-[370px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] 2xl:max-w-screen-lg  mt-4 py-5 px-4 sm:px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400 rounded-lg'>
      <Inputs/>
      <TimeAndLocation/>
    </div>
  )
}

export default App
