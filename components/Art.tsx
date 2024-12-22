import React from 'react'
import Marquee from 'react-fast-marquee'
import data from '@/art.json'
import CustomCard from './customizableCard'
import ImageColumn from './ImageColumn'

const Art = () => {
    const minL = Math.ceil(data.length/3)
    const arr1 = data.splice(0,minL)
    const arr2 = data.splice(0,minL)
    const arr3 = data.splice(0,minL)
    return (
        <section className='py-[5rem] px-2 lg:px-0'>
            <h3 className='px-4  text-3xl max-w-[1200px] w-full mx-auto my-6'>
                Art

            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1200px] w-full mx-auto items-start gap-6 p-4  '>
                <ImageColumn data={arr1} />
                <ImageColumn data={arr2} />
                <ImageColumn data={arr3} />
            </div>
        </section>
    )
}

export default Art