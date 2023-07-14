import React,{ useState } from 'react' 
import data from './data'
import Card from './Card'
export default function Skills() {
    const [skills,setSkill]=useState(data)
    return (
    <div   id='skills' className='relative  border-b-2 sm:border-0 border-red-600 border-solid   bg-[#16171b] pb-40 pt-10'>
      <p className='skills-title font-bold text-[120px]  uppercase sm:text-[80px] sm-x2:!text-[50px]  w-full text-center  mb-20 '> my skills</p>
      <div className=' relative h-full'>
        <main data-aos="flip-left"  data-aos-duration="3000" className='skills-main z-50 relative flex justify-evenly mx-auto w-full md:flex-col  max-w-[1346px] '>
            <div>
                  {skills.slice(0,5).map(data=>(
            <Card {...data} />
        ))}
            </div>
      
        <div className=' md:mt-0 mt-28'>
              {skills.slice(5,10).map(data=>(
            <Card {...data} />
        ))}
        </div>
        </main>
        
        
       
        
           <span className="Skillsline block w-[2px] sm-x2:h-[101%] h-full bg-[#f43534] absolute left-1/2 -ml-[1px] -top-10"></span> 
        </div>
        
    </div>
  )
}
 