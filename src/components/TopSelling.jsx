import React from 'react'
import Container from './Container'
import top1 from "#/top_sell/top1.png"
import top2 from "#/top_sell/top2.png"
import top3 from "#/top_sell/top3.png"
import top4 from "#/top_sell/top4.png"
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import Image from 'next/image';
import Iconreusable from './reusable/Iconreusable'
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"], weight: ['700'] });

const TopSelling = () => {
    return (
        <section>
            <Container className='py-[30px]'>
                <div className={inter.className}>
                    <h2 className='font-bold text-[48px] text-[#000] text-center'>Top Selling</h2>
                </div>
                <div className="flex justify-between items-center my-[25px]">
                    <div className="relative group">
                        <Image src={top1} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Vertical Striped Shirt</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[70%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$212</p>
                                <p className='font-bold text-[24px] text-[rgb(0,0,0,40%)]'>$232</p>
                                <p className='font-medium text-[12px] text-[#FF3333] border px-[14px] py-[6px] bg-[rgb(255,51,51,10%)] rounded-full'>20%</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={top2} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Courage Graphic T-shirt</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[70%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$145</p>

                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={top3} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Loose Fit Bermuda Shorts</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[80%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$80</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <Image src={top4} />
                        <Iconreusable />
                        <div className="pt-[15px]">
                            <h6 className='font-bold text-[20px] text-[#000]'>Faded Skinny Jeans</h6>
                            <div className="py-[8px] flex items-center justify-between w-[50%]">
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdOutlineStar className='' />
                                <MdStarHalf className='' />
                                <p className='font-normal text-[14px] text-[#000]'>4.5/5</p>

                            </div>
                            <div className="flex items-center w-[70%] justify-between">
                                <p className='font-bold text-[24px] text-[#000]'>$210</p>
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

export default TopSelling