
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import {TypeAnimation} from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src='https://th.bing.com/th/id/R.101696699d7e931bddf71141273d3937?rik=oBnfNGABIclwuQ&pid=ImgRaw&r=0' />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl text-centerfont-bold text-gray-800'>Welcome to SFFP where future leaders are groomed</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>We are creating future
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Doctors ...',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Scientist ...',
                    2000,
                    'coders',
                    1000
                    
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <BsTwitterX className="cursor-pointer" size={20}/>
                <BsFacebook className="cursor-pointer" size={20}/>
                <BsInstagram className="cursor-pointer" size={20}/>
                <BsLinkedin className="cursor-pointer" size={20}/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Main;