 "use client"
import { SkillType } from '@/app/types/Index.types'
import i18n from '@/i18n/index';  
export default function Card(props:SkillType) {
    
   
    return (
        <div dir={i18n.language == 'fa' ? 'rtl' : 'ltr'} className='relative   md:!w-3/4 md:mx-auto items-stretch md:z-[888] border-[#26272d] border-solid border-2 sm-x2:px-4  pb-5 pt-4 px-8 rounded-md mb-12 bg-[#1c1d21] lg:w-[377px] w-[535px]'>
            <div className='font-swap text-3xl text-white flex gap-2'>
                <p className='relative z-40 top-[2px]'>{props.name}</p>
                <span className='line block relative top-[20px] ml-8 h-[2px] w-full'></span>
            </div> 
            <p className={`${i18n.language == 'fa' ? 'font-vazirlight': 'font-swap'}  text-1xl text-white mt-4 sm-x2:mt-5 text-[15px]`}>{i18n.language !== 'en' ? props.des_fa : props.des_en}</p>
            <div className="w-full bg-gray-200 rounded-full">
                <div className="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full mt-8" style={{ width: props.percent }}> {props.percent}</div>
            </div>
            <div className={ props.rotate ? 'left-1 absolute md:left-1 md:right-auto md:w-full sm:!left-9  -top-5': 'absolute md:left-1 md:right-auto -top-5 right-1 md:w-full  sm:!left-9'}>
                <span className={ props.rotate ?"circle sm-x2:top-[48px]  w-[18px] h-[18px] z-[2] bg-[#f43534]  rounded-full absolute top-[50px] md:-left-[61px] md:right-auto  -left-[61px]" :"circle sm-x2:top-[48px]  w-[18px] h-[18px] z-[2] bg-[#f43534] md:-left-[61px] md:right-auto   rounded-full absolute top-[50px] -right-[61px]" }></span>
                <span className={ props.rotate ?"rectengle sm-x2:w-[105%] absolute w-[115px] h-8 md:-left-12 md:right-auto -left-12 top-[42px]" :"rectengle sm-x2:w-[105%] absolute w-[115px] h-8 -right-12 top-[42px] md:-left-12 md:right-auto" }></span>
            </div> 
        </div>
    )
}       


