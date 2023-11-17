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
    years: 2020,
    duration: '3 years',
    title: 'Content Creator',
    details: 'Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript. Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript.',
  },
  {
    years: 2021,
    title: 'Google',
    duration: '1 year',
    details: 'Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript. Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript.',
  },
  {
    years: 2022,
    title: 'Google',
    duration: '2 years',
    details: 'Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript. Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript.',
  },
  {
    years: 2019,
    title: 'Google',
    duration: '3 years',
    details: 'Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript. Best in the business, started with Django and Python and then migrated to React and React Native as well as JavaScript.',
  },
];

const Work: React.FC = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:first-letter:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
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

