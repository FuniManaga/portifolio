
import ProjectItem from './ProjectItem'


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
            <ProjectItem img='https://th.bing.com/th/id/R.34174a26d656d19e053becc51dc71ef2?rik=hB8311M0frDtUw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Nca-1_92ck8%2fU9eBgtFzUTI%2fAAAAAAAAAbU%2fbzvWcTPTink%2fs1600%2f20140729_093314%2b(2).jpg&ehk=ZU33Hg3a%2fvFsm4R0IWRDUMp7geD8TPucnuwpbr9tkhg%3d&risl=&pid=ImgRaw&r=0' title="Phaswana"  />
            <ProjectItem img='https://th.bing.com/th/id/R.924e49a6301df6a31efef18f59ab2dd2?rik=HlV9H8n9I3unLw&pid=ImgRaw&r=0' title="Raluswielo"  />
        </div>
    </div>
  )
}
