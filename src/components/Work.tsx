import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2020,
    duration: '3 years',
    title: 'Content Creater',
    details: 'Best in the bussines, started with django and python and then migrated to react and react native as well as javascript Best in the bussines, started with django and python and then migrated to react and react native as well as javascript'
  },
  {
    year: 2021,
    title: 'google',
    duration: '1 years',
    details: 'Best in the bussines, started with django and python and then migrated to react and react native as well as javascriptBest in the bussines, started with django and python and then migrated to react and react native as well as javascript '
  },
  {
    year: 2022,
    title: 'google',
    duration: '2 years',
    details: 'Best in the bussines, started with django and python and then migrated to react and react native as well as javascript Best in the bussines, started with django and python and then migrated to react and react native as well as javascript'
  },
  {
    year: 2019,
    title: 'google',
    duration: '3 years',
    details: 'Best in the bussines, started with django and python and then migrated to react and react native as well as javascript Best in the bussines, started with django and python and then migrated to react and react native as well as javascript'
  },
]

const Work = () => {
  return(
    <div id='work' className='max-w-[1040px] m-auto md:first-letter:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) =>(
        <WorkItem 
          key={idx} 
          year={item.year} 
          title={item.title} 
          duration={item.duration} 
          details={item.details} />
      ))}
    </div>
  )
};

export default Work;
