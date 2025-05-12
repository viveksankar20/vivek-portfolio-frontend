import React from 'react';
import { BriefcaseBusiness } from 'lucide-react';
function Experience() {
  return (
    <div className=" mx-auto w-full  max-w-4xl px-4 sm:px-6 lg:px-8">
      
      <div className="space-y-4 mb-8">
      <h1 className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent '> My Journey & Growth</h1>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00CAEE] text-center">
        A Glimpse Into My Professional Milestones
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center mt-1">
        Explore key moments that shaped my development career.
        </p>
      </div>

      {/* Timeline Items */}
      <div className="">
        {timelineData.map((item, index) => (
          <div key={index} className={`relative pb-5 pl-9 ${
            index !== timelineData.length - 1 ? 'before:absolute before:left-0 before:top-6 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-emerald-300  before:to-sky-400' : ''
          }`}>
            {/* <div className='p-[2px] border'></div>*/}
            <span className=' bg-[#14151D] absolute -left-5 p-2 border-2 border-gray-500 rounded-full'>
<BriefcaseBusiness className='text-white   text-xl '/>
</span>
            <TimelineItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const timelineData = [
  {
    year: '2024',
    title: 'MERN Stack Developer',
    institution: '7Eagles',
    description:
      'Completed an intensive Java Full Stack Development course, mastering front-end and back-end technologies including Java, Spring Boot, React.js, and database management through hands-on real-world projects.',
  },
  {
    year: '2023',
    title: 'My Course',
    institution: 'Besant Technologies',
    description:
      'Completed an intensive Java Full Stack Development course, mastering front-end and back-end technologies including Java, Spring Boot, React.js, and database management through hands-on real-world projects.',
  },
  {
    year: '2023',
    title: 'My College',
    institution: 'OASYS INSTITUTE OF TECHNOLOGY, Pulivalam, Trichy 621006',
   
    description:
      'Graduated with a Bachelor\'s degree in ECE, developing a strong technical foundation in electronics, communication systems, and programming, supported by practical project experience.',
  },
  {
    year: '2019',
    title: 'My School',
    institution: 'AGM HR. SEC SCHOOL, ERAGUDI 621001',
  
    description:
      'Specialized in Mathematics and Computer Science during Higher Secondary, enhancing analytical thinking and technical skills.',
  },
  {
    year: '2017',
    title: 'My School',
    institution: 'AGM HR. SEC SCHOOL, ERAGUDI 621001',
    
   
    description:
      'Successfully completed SSLC, building a strong academic base in core subjects and preparing for higher education.',
  },
];


interface TimelineItemProps {
  title: string;
  institution: string;
  year: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  institution,
  description,
}) => {
  return (
    // <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.2}}>
    <div className="border  border-[#00CAEE]  bg-[#14151D] hover:shadow-costom-shadow  p-5 sm:p-6 rounded-xl  overflow-hidden">
      <h1 className='text-gray-300 my-2 font-semibold'>{year}</h1>
    <h3 className="text-[#00CAEE] font-bold text-lg sm:text-xl mb-2">{title}</h3>
    <h4 className="text-white text-base sm:text-lg font-semibold">{institution}</h4>
   
   
  
    {/* Description */}
    <p className="mt-3 text-sm text-gray-300">
     
      <span className="text-[#FFFFFF]">
        {description}
      </span>
    </p>
  </div>
  // </motion.div>
  );
};

export default Experience;
