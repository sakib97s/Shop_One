import React from 'react'
import Container from './Container'
import Image from 'next/image'
import banner from '#/banner.png'
import brand from '#/brand/brand.png'
import brand2 from '#/brand/brand2.png'
import brand3 from '#/brand/brand3.png'
import brand4 from '#/brand/brand4.png'
import brand5 from '#/brand/brand5.png'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ['700'] });

const Banner = () => {
    return (
        <section>
            <Container className='flex justify-between items-center'>
                <div className="w-full">
                    <div className="w-[570px]">
                        <div className={inter.className}>
                            <h1 className=' leading-[64px] font-semibold text-[64px] text-[#000]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        </div>
                        <p className='pt-[30px] font-normal text-[16px] text-[rgb(0,0,0,60%)]'>
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <button className='my-[30px] font-normal text-[16px] text-[#fff] px-[67px] py-[15px] border border-[#000] bg-[#000] rounded-full hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>Shop Now</button>
                    </div>
                    <div className="flex w-[80%] items-center justify-between ">
                        <div className="relative">
                            <h3 className='font-bold text-[40px] text-[#000000]'>200+</h3>
                            <p className='font-normal text-[16px] text-[rgb(0,0,0,60%)]'>International Brands</p>
                        </div>
                        <div className="">
                            <h3 className='font-bold text-[40px] text-[#000000]'>2000+</h3>
                            <p className='font-normal text-[16px] text-[rgb(0,0,0,60%)]'>High-Quality Products</p>
                        </div>
                        <div className="">
                            <h3 className='font-bold text-[40px] text-[#000000]'>30,00+</h3>
                            <p className='font-normal text-[16px] text-[rgb(0,0,0,60%)]'>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <Image src={banner} className='rounded-lg' />
            </Container>
            <section className='bg-[#000000] py-8'>
                <Container className='flex justify-between items-center'>
                    <Image src={brand} />
                    <Image src={brand2} />
                    <Image src={brand3} />
                    <Image src={brand4} />
                    <Image src={brand5} />
                </Container>
            </section>
        </section>
    )
}

export default Banner