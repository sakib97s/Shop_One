import React from 'react'
import Container from './Container'
import newa from "#/new_Arr/new.png"
import new2 from "#/new_Arr/new2.png"
import new3 from "#/new_Arr/new3.png"
import new4 from "#/new_Arr/new4.png"
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { Inter } from "next/font/google";
import Image from 'next/image';
import Iconreusable from './reusable/Iconreusable'



const inter = Inter({ subsets: ["latin"], weight: ['700'] });

const NewArrivals = () => {
    return (
        <section>
            <Container className='py-[30px] border-b-[1px] border-[rgb(0,0,0,10%)]'>
                <div className={inter.className}>
                    <h2 className='font-bold text-[48px] text-[#000] text-center'>NEW ARRIVALS</h2>
                </div>
                <div className="flex justify-between items-center my-[25px]">
                    <div className="relative group">
                        <Image src={newa} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>T-Shirt With Tape Details</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[80%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$120</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={new2} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Skinny Fit Jean Skinny</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[70%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$240</p>
                                <p className='font-bold text-[24px] text-[rgb(0,0,0,40%)]'>$260</p>
                                <p className='font-medium text-[12px] text-[#FF3333] border px-[14px] py-[6px] bg-[rgb(255,51,51,10%)] rounded-full'>20%</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={new3} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Checkered Shirt</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[80%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$180</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={new4} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Sleeve Striped T-shirt</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[70%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$130</p>
                                <p className='font-bold text-[24px] text-[rgb(0,0,0,40%)]'>$160</p>
                                <p className='font-medium text-[12px] text-[#FF3333] border px-[14px] py-[6px] bg-[rgb(255,51,51,10%)] rounded-full'>30%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className='font-medium text-[16px] text-[#000] border py-[15px] px-[80px] rounded-full'>View All</button>
                </div>
            </Container>
        </section>
    )
}

export default NewArrivals