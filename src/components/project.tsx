import React from 'react';
import WorkItem from './WorkItem';

interface WorkData {
  years: number;
  title: string;
  duration: string;
  details: string;
}

const data: WorkData[] = [
  {
    years: 2023,
    duration: 'for the second year',
    title: 'Distributed Tablets',
    details: ' the collaboration between SFFP and the University of Venda, through the distribution of laptops to grade 12 learners, has not only improved access to education but has also positioned these students for success in higher education. By fostering digital literacy and providing the necessary tools, this initiative has contributed to breaking down barriers and creating a more equitable educational landscape for the future leaders of our society.',
  },
  {
    years: 2023,
    title: 'Teaching Data science',
    duration: 'for few months',
    details: 'teaching grade 12 learners data science and coding has far-reaching effects, from immediate academic benefits to long-term career advantages. It not only equips them with technical skills but also instills a mindset of adaptability and innovation, positioning them as confident and capable contributors to the evolving landscape of technology and data-driven industries.',
  },
  {
    years: 2023,
    title: 'Heping Students with academics',
    duration: 'during saturdays',
    details: 'the organization extra school project in mathematics and science went beyond conventional teaching methods. Through tailored programs, engaging instruction, and a holistic approach, it successfully contributed to the academic development of learners, promoting a deeper understanding of these subjects and cultivating a positive attitude towards STEM education.',
  },
  ];

const Work: React.FC = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:first-letter:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.years.toString()}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;

