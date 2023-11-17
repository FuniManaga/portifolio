import React from 'react'
import ProjectItem from './ProjectItem'
import cryptoImg from '../assets/crypto.jfif'
import netflixImg from '../assets/netflix.jfif'
import propertyImg from '../assets/property.jfif'
import twitchImg from '../assets/twitch.jfif'

export default function Projects() {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
               cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
               non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={cryptoImg} title="Cryptocurrency Tracker" description="A web app that allows users to track the" />
            <ProjectItem img={netflixImg} title="netflix App" description="A web app that allows users to track the" />
            <ProjectItem img={propertyImg} title="Property app" desc="A web application that allows users to track the prices of" />
            <ProjectItem img={twitchImg} title="twitch app" description="A web app that allows users to track the" />
        </div>
    </div>
  )
}
