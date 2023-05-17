import React, { useEffect, useState } from "react";
import Footer from "../component/footer";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { url } from '../utils/globalVariabel';
import Cookies from 'js-cookie';

const Materi = () =>{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [subClassess, setSubClassess] = useState([]);
    
    const materi = searchParams.get("class");
    const status = Cookies.get('status');
    const token = Cookies.get("token");

    useEffect(()=>{
        if(!materi){
            navigate("/");
        }
    }, [navigate, materi]);

    const getSubClassess = async() =>{
        const result = await axios.get(url + "/class/subClass?filters[class]="+materi);
        return result.data.data;
    };
    useEffect(()=>{
        getSubClassess().then((result) => setSubClassess(result));
    }, []);
    const deleteMateri = async(xid) =>{
        await axios.delete(url + "/class/subClass/"+xid, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        } )
        window.location.reload();
    }
    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>All Book</h1>
                    </a>
                </div>

                <div className="col-span-9 flex items-center justify-end text-white ml-[700px]">
                        <a href="/">
                            <h1 className="hover:text-yellow-400">Homepage</h1>
                        </a>
                        <a href="/materi?class=Books">
                            <h1 className='mx-[80px] hover:text-yellow-400'>All Book</h1>
                        </a>
                        <a href="/About">
                            <h1 className="hover:text-yellow-400">About Us</h1>
                        </a>
                </div>
            </header>

            <main className="h-screen pt-3 bg-yellow-500">

            <section className="materi p-6">
                <h1 className="font-semibold text-black capitalize text-center col-span-7 text-[25px]">All {materi} </h1>
                {status && status === "Editor" ?  
                    <div className="flex justify-between">
                    <button 
                        className="bg-[#ece8e8] hover:bg-slate-400 text-black font-bold py-2 px-4 rounded-xl"
                        onClick={() => {
                        navigate("UnggahM?class=" + materi);
                        }}
                    >
                        Upload Book
                    </button>
                    </div> 
                : ""}
                
                <div className='grid grid-cols-7 gap-1 pt-1 mt-[60px]'>
                    {subClassess && subClassess.map((subclassessChild, index) => 
                    <div 
                        className='w-[160px] h-[220px] mt-7 rounded-xl m-auto flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800' 
                        key={index}
                        onClick={() => {
                        window.location.href = url + "/public/materi/" + subclassessChild.materi;
                        }}
                    >
                        <img 
                        src={url+"/public/image/"+ subclassessChild.image} 
                        alt="Your Image" 
                        className="rounded-t-xl w-[90%] h-[140px] mt-2" 
                        />
                        <div className='w-full text-center rounded-b-xl flex items-center justify-center text-white font-semibold pt-1'>
                        {subclassessChild.name}
                        </div>
                        {status && status === "Editor" ? 
                        <button 
                            className="bg-red-500 hover:bg-red-700 text-black font-bold px-4 z-10 text-[14px] h-[30px] rounded-xl mt-2 p-"
                            onClick={() => {
                            deleteMateri(subclassessChild.xid);
                            }}
                        >
                            Hapus
                        </button> 
                        : ""}
                    </div>
                    )}
                </div>
            </section>
            </main>

            <Footer/>
            
        </>
       
    );
}

export default Materi;