import React from 'react'

export default function Card(props) {
    return (
        <div className='relative  z-[1] items-stretch  border-[#26272d] border-solid border-2 pb-5 pt-4 px-8 rounded-md mb-12 bg-[#1c1d21] w-[535px]'>
            <div className='font-swap text-3xl text-white flex gap-2'>
                <p className='relative z-40'>{props.name}</p>
                <span className='line block relative top-[20px] ml-8 h-[2px] w-full'></span>
            </div>
            
            <p className='font-swap text-1xl text-white mt-4 '>{props.text}</p>
            <div className="w-full bg-gray-200 rounded-full">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full mt-8" style={{ width: props.percent }}> {props.percent}</div>
            </div>
            <div className={ props.rotate ? 'left-1 absolute -top-5': 'absolute -top-5 right-1 '}>
                <span className={ props.rotate ?"circle  w-[18px] h-[18px] z-[2] bg-[#f43534]  rounded-full absolute top-[50px] -left-[61px]" :"circle  w-[18px] h-[18px] z-[2] bg-[#f43534]  rounded-full absolute top-[50px] -right-[61px]" }></span>
                <span className={ props.rotate ?"rectengle absolute w-[115px] h-8 -left-12 top-[42px]" :"rectengle absolute w-[115px] h-8 -right-12 top-[42px]" }></span>
            </div>
        </div>
    )
}       