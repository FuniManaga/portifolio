
import ProjectItem from './ProjectItem'
import propertyImg from '../assets/property.jfif'
import twitchImg from '../assets/twitch.jfif'

export default function Projects() {
  return (
    <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>About Us</h1>
        <p className='text-center py-8'>Our Mission
at <span className='text-[#001b5e]'>SFFP</span>, our mission is to provide quality education and support
 to students, ensuring they have the tools and knowledge to thrive in
  an ever-evolving world. We are dedicated to creating inclusive educational
   programs that reach students from diverse backgrounds,
 ultimately empowering them to reach their full potential.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img='https://th.bing.com/th/id/OIP.F0tFEhJ09HS7GToSSA8LDgHaE7?rs=1&pid=ImgDetMain' title="Ralson Tshinanne"  />
            <ProjectItem img='https://th.bing.com/th/id/OIP.UO5I7H2eQZ0pSq5RDxA6wAHaHa?rs=1&pid=ImgDetMain' title="Mphaphuli" />
            <ProjectItem img={propertyImg} title="Phaswana"  />
            <ProjectItem img={twitchImg} title="Raluswielo"  />
        </div>
    </div>
  )
}
