import React from 'react'
import Container from './Container'
import man1 from "#/dress_style/man1.png"
import man2 from "#/dress_style/man2.png"
import man3 from "#/dress_style/man3.png"
import man4 from "#/dress_style/man4.png"
import { Inter } from "next/font/google";
import Image from 'next/image'


const inter = Inter({ subsets: ["latin"], weight: ['700'] });

const DressStyle = () => {
    return (
        <section>
            <Container className='py-[30px] bg-[#F0F0F0] rounded-2xl'>
                <div className={inter.className}>
                    <h4 className='font-bold text-[48px] text-[#000] text-center pb-10'>BROWSE BY dress STYLE</h4>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <div className="mb-10 relative hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                        <Image src={man1} />
                        <h6 className='absolute top-5 left-5 font-bold text-[36px] text-[#000]'>Casual</h6>
                    </div>
                    <div className="mb-10 relative hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                        <Image src={man2} />
                        <h6 className='absolute top-5 left-5 font-bold text-[36px] text-[#000]'>Formal</h6>
                    </div>
                    <div className="mb-10 relative hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] lg:mb-0">
                        <Image src={man3} />
                        <h6 className='absolute top-5 left-5 font-bold text-[36px] text-[#000]'>Party</h6>
                    </div>
                    <div className="relative hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                        <Image src={man4} />
                        <h6 className='absolute top-5 left-5 font-bold text-[36px] text-[#000]'>Gym</h6>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DressStyle