import React from 'react'
import Marquee from 'react-fast-marquee'
import data from '@/art.json'
import CustomCard from './customizableCard'

const Art = () => {
  return (
    <section className='py-[5rem] px-2 lg:px-0'>
    <h3 className='px-4  text-3xl max-w-[1200px] w-full mx-auto my-6'>
    Art
        
    </h3>
    <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1200px] w-full mx-auto items-start gap-6 p-4  '>
        {data.map((image,index)=> {
            return(
                <CustomCard key = {index} className='flex w-full flex-col'>
                    <div className='bg-white p-2 w-full text-black text-xl'>
                        <Marquee speed={100} >
                        {Array(5).fill(image.name).map((x,i) => <p className='mx-2' key = {i}>{x}</p>)}
                        </Marquee>
                    </div>
                    <a href={image.url} className='cursor-crosshair w-full' target='_blank'><img className='object-cover w-full' src = {image.url} /></a>
                </CustomCard>
            )
        })}
    </div>
</section>
  )
}

export default Art