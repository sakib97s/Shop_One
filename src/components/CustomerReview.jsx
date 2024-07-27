import Container from "./Container"
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { Inter } from "next/font/google";
import { IoIosCheckmarkCircle } from "react-icons/io";


const inter = Inter({ subsets: ["latin"], weight: ['700'] });


const CustomerReview = () => {

    return (
        <section>
            <Container className='my-10'>
                <div className={inter.className}>
                    <h4 className='font-bold text-[48px] text-[#000] text-center pb-10'>OUR HAPPY CUSTOMERS</h4>
                </div>

                <div className="flex justify-between items-center">
                    <div className="w-[24%] p-[30px] border-[1px] border-[rgb(0,0,0,10%)] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                        <div className=" flex items-center justify-between w-[30%]">
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                        </div>
                        <h3 className="font-bold text-[20px] text-[#000] py-3 flex items-center">Sarah M. <IoIosCheckmarkCircle className="ml-3 text-[#01AB31]" /></h3>
                        <p className="font-normal text-[16px] text-[rgb(0,0,0,60%)] leading-[22px]">I blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.</p>
                    </div>
                    <div className="w-[24%] p-[30px] border-[1px] border-[rgb(0,0,0,10%)] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                        <div className=" flex items-center justify-between w-[30%]">
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                        </div>
                        <h3 className="font-bold text-[20px] text-[#000] py-3 flex items-center">Sarah M. <IoIosCheckmarkCircle className="ml-3 text-[#01AB31]" /></h3>
                        <p className="font-normal text-[16px] text-[rgb(0,0,0,60%)] leading-[22px]">I blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.</p>
                    </div>
                    <div className="w-[24%] p-[30px] border-[1px] border-[rgb(0,0,0,10%)] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                        <div className=" flex items-center justify-between w-[30%]">
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                        </div>
                        <h3 className="font-bold text-[20px] text-[#000] py-3 flex items-center">Sarah M. <IoIosCheckmarkCircle className="ml-3 text-[#01AB31]" /></h3>
                        <p className="font-normal text-[16px] text-[rgb(0,0,0,60%)] leading-[22px]">I blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.</p>
                    </div>
                    <div className="w-[24%] p-[30px] border-[1px] border-[rgb(0,0,0,10%)] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
                        <div className=" flex items-center justify-between w-[30%]">
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                            <MdOutlineStar className='text-[#FFC633] w-[22px] h-[22px]' />
                        </div>
                        <h3 className="font-bold text-[20px] text-[#000] py-3 flex items-center">Sarah M. <IoIosCheckmarkCircle className="ml-3 text-[#01AB31]" /></h3>
                        <p className="font-normal text-[16px] text-[rgb(0,0,0,60%)] leading-[22px]">I blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I`ve bought has exceeded my expectations.</p>
                    </div>


                </div>

            </Container>
        </section>
    )
}

export default CustomerReview