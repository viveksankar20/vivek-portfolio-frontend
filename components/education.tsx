import { motion } from 'framer-motion';
import React from 'react';

function Education() {
  return (
    <div className=" mx-auto w-full  max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      
      
      <div className="space-y-4 mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00CAEE] text-center">
        Experience
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center mt-1">
          My education has been a journey of self-discovery and growth. <br className="hidden sm:block" />
          My educational details are as follows.
        </p>
      </div>

      {/* Timeline Items */}
      <div className="space-y-5 sm:space-y-10">
        {timelineData.map((item, index) => (
          <div key={index} className="">
            <TimelineItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}

const timelineData = [
  {
    title: 'My Course',
    institution: 'Besant Technologies',
    duration: 'Java Full Stack Developer | July - December 2023',
    grade: 'Grade: 90%',
    description:
      'Completed an intensive Java Full Stack Development course, mastering front-end and back-end technologies including Java, Spring Boot, React.js, and database management through hands-on real-world projects.',
  },
  {
    title: 'My College',
    institution: 'OASYS INSTITUTE OF TECHNOLOGY, Pulivalam, Trichy 621006',
    duration: 'BE - Electronics and Communication Engineering | 2019 - 2023',
    grade: 'Grade: 7.5 CGPA',
    description:
      'Graduated with a Bachelor\'s degree in ECE, developing a strong technical foundation in electronics, communication systems, and programming, supported by practical project experience.',
  },
  {
    title: 'My School',
    institution: 'AGM HR. SEC SCHOOL, ERAGUDI 621001',
    duration: 'HSC - Maths Computer Science Group | 2019',
    grade: 'Grade: 61%',
    description:
      'Specialized in Mathematics and Computer Science during Higher Secondary, enhancing analytical thinking and technical skills.',
  },
  {
    title: 'My School',
    institution: 'AGM HR. SEC SCHOOL, ERAGUDI 621001',
    duration: 'SSLC | 2017',
    grade: 'Grade: 71%',
    description:
      'Successfully completed SSLC, building a strong academic base in core subjects and preparing for higher education.',
  },
];


interface TimelineItemProps {
  title: string;
  institution: string;
  duration: string;
  grade?: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  institution,
  duration,
  grade,
  description,
}) => {
  return (
    // <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} transition={{duration: 0.2}}>
    <div className="border  border-[#00CAEE] hover:scale-105 duration-700 bg-[#14151D] hover:shadow-costom-shadow  p-5 sm:p-6 rounded-xl  overflow-hidden">
    <h3 className="bg-gradient-to-r from-[#00D1EF] to-[#0400E0] inline-block text-transparent bg-clip-text font-bold text-lg sm:text-xl mb-2">{title}</h3>
    <h4 className="text-cyan-400 text-base sm:text-lg font-semibold">{institution}</h4>
    <p className="text-sm text-gray-300">{duration}</p>
    {grade && <p className="text-sm text-green-400 font-medium mt-1">{grade}</p>}
  
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

export default Education;
