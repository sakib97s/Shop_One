import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";

const Iconreusable = () => {
    return (
        <div className="absolute top-[-10px] left-[0px] group-hover:top-[20px] group-hover:left-[30px] opacity-0 group-hover:opacity-100 ease-in-out duration-500">
            <FaSearchPlus className='' />
            <IoMdHeartEmpty className='my-[15px]' />
            <FaCartPlus className='' />
        </div>
    )
}

export default Iconreusable