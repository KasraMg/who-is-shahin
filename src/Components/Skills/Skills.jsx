import React,{ useState } from 'react'
import './Skills.css'
import data from './data'
import Card from './Card'
export default function Skills() {
    const [skills,setSkill]=useState(data)
    return (
    <div className='relative bg-[#16171b] py-40'>
      <p className='skills-title font-bold text-[120px]  uppercase  w-full text-center  mb-20 '> my skills</p>
      <div className=' relative h-full'>
        <main className='skills-main flex justify-evenly px-[93px] '>
            <div>
                  {skills.slice(0,5).map(data=>(
            <Card {...data} />
        ))}
            </div>
      
        <div className=' mt-28'>
              {skills.slice(5,10).map(data=>(
            <Card {...data} />
        ))}
        </div>
        </main>
        
        
       
        
           <span className="Skillsline block w-[2px] h-full bg-[#f43534] absolute left-1/2 -ml-[1px] -top-10"></span> 
        </div>
        
    </div>
  )
}
 