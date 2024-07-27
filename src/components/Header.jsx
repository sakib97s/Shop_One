import Image from "next/image";
import Container from "./Container"
import { RxCross2 } from "react-icons/rx";
import logo from "#/logo.png"
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    return (
        <section >
            <section className="bg-[#000000] py-[9px]">
                <Container className="text-center relative ">
                    <h6 className="font-normal text-[14px] text-[#fff]">Sign up and get 20% off to your first order. <span className="underline underline-offset-4 font-bold">Sign Up Now</span></h6>
                    <div className="absolute right-0 top-[50%] translate-y-[-50%]">
                        <RxCross2 className="text-[#fff]" />
                    </div>
                </Container>
            </section>
            <Container className='py-6'>
                <div className="flex items-center justify-between">
                    <div className="w-[15%]">
                        <Image src={logo} />
                    </div>
                    <div className="flex justify-between items-center w-[30%]">
                        <h3 className="font-normal text-[16px] text-[#000000] hover:font-bold ease-in-out duration-500 flex items-center">Shop <IoMdArrowDropdown className="ml-[2px]" /></h3>
                        <h3 className="font-normal text-[16px] text-[#000000] hover:font-bold ease-in-out duration-500 flex items-center">On Sale <IoMdArrowDropdown className="ml-[2px]" /></h3>
                        <h3 className="font-normal text-[16px] text-[#000000] hover:font-bold ease-in-out duration-500 flex items-center">New Arrivals <IoMdArrowDropdown className="ml-[2px]" /></h3>
                        <h3 className="font-normal text-[16px] text-[#000000] hover:font-bold ease-in-out duration-500 flex items-center">Brands <IoMdArrowDropdown className="ml-[2px]" /></h3>

                    </div>
                    <div className="w-[35%] flex justify-between items-center relative">
                        <input type="text" className="w-full h-[48px] rounded-full pl-[50px] bg-[#F0F0F0] placeholder:font-normal placeholder:text-[16px] text-[16px] text-[#000] placeholder:text-[rgb(0,0,0,40%)] focus:ring-[#]" placeholder="Search for products..." />
                        <div className="absolute left-[16px] top-[50%] translate-y-[-50%]">
                            <FaSearch className="h-[24px] w-[24px] text-[rgb(0,0,0,40%)]" />
                        </div>
                    </div>
                    <div className="w-[4%] flex justify-between items-center ">
                        <FiShoppingCart className="h-[24px] w-[24px]" />
                        <MdOutlineAccountCircle className="h-[24px] w-[24px]" />
                    </div>
                </div>
            </Container>
        </section >
    )
}

export default Header