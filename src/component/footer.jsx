import React from 'react';
import sw from "../Image/pedang.jpg";
import dela from "../Image/logo dela.png";
import { useNavigate } from 'react-router-dom';

const Footer = () =>{

    const navigate = useNavigate();

    const clickEvent = (link) =>{
        navigate(link);
    }



return (
    <footer className='fixed bottom-0 w-full bg-[#135c17] grid grid-cols-10 gap-9 items-center justify-items-center py-4'>
    <div className='col-span-2 flex-col text-white'>
        <h1 className=' font-semibold ml-[50px]'>Tentang Kami :</h1>
        <p>21013018@unikadelasalle.ac.id</p>
        <p>21013046@unikadelasalle.ac.id</p>
    </div>

    <div className='col-span-6'>
        <a href="/Login">
            <img src={sw} alt="" className='rounded-full h-[80px]'/>
        </a>
    </div>

    <div className='col-span-2 w-[80px] h-[80px]'>
        <img src={dela} alt="rounded-full " />
    </div>
</footer>)
}

export default Footer;