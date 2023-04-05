import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            <div className='w-full h-80 footerFondo bg-cover  bg-center'>
                <div className="flex justify-center w-full pt-52">
                    <ul className='lg:flex text-xl lg:text-2xl mt-32 lg:mt-20 mb-10 text-center'>
                        <li className="px-10  hover:text-[#6da643]"><a href="#">INICIO</a> </li>
                        <li className="px-10  hover:text-[#6da643]"><a href="#nosotros"> NOSOTROS</a></li>
                        <li className="px-10  hover:text-[#6da643]"><a href="#servicios">SERVICIOS</a></li>
                        <li className="px-10  hover:text-[#6da643]"><a href="#contacto">CONTACTO</a></li>
                    </ul>
                </div>
                <div className="p-4 text-center text-md font-normal bg-[#FEFEFE]">
                    <p>Urban Garden CR 2023 © All rights reserved</p>
                    <p>Developed by Jocsan Morera</p>
                </div>
            </div>
        </div>
    )
}

export default Footer