import React, { useEffect, useState } from 'react';
import axios from "axios";
import { url } from '../utils/globalVariabel';
import { useNavigate } from 'react-router-dom';
import Footer from "../component/footer"
import GamTak from "../Image/deskbuk.jpg"


const Home = () =>{
    const navigate = useNavigate();
    const [classess, setClassess] = useState([]);
    const getClassess = async() =>{
        const result = await axios.get(url + "/class");
        console.log(result);
        return result.data.data;
    };
    useEffect(()=>{
        getClassess().then((result) => setClassess(result));
    }, []);
    
    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>HomePage</h1>
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

            <main className='flex-col bg-yellow-500 w-screen h-screen'>
                <section className='kotak awal '>
                    
                <div className="flex justify-center pt-3">
                    <div className="rounded-xl">
                        <p className="text-black font-bold text-2xl col-span-2 p-3">RECOMENDATION</p>
                    </div>
                </div>
                </section>

                <section className='flex'>
                    <section className="Kotak Samping m-4 relative">
                        <div className="relative">
                            <img src={GamTak} alt="" className="w-[600px] h-[600px]"/>
                            <p className="absolute inset-0 flex items-center justify-center text-[#0A8000] font-bold text-[37px]">Dezbook <br />Information</p>
                        </div>
                    </section>

                    <section>
                        {classess && classess.map((result, index) =>
                        
                        <section className='KotakBooks' key={index}>
                            
                            <div className='flex items-center justify-items-center h-[50px] w-[900px] bg-[#eeeeee] p-3 rounded-full mt-4'>
                                <h1 className='text-[black] font-bold'>{result.name.toUpperCase()}</h1>
                                
                                <div className=' bg-[black] rounded-full ml-[750px] text-white hover:text-yellow-400 '>
                                <h2 className='text-[14px] p-2' onClick={()=>{
                                    navigate("/materi?class="+ result.name)
                                }}>View All</h2>
                                </div>
                                
                            </div>

                            {result.subclasses ? (
                            <div className="mt-5 flex flex-wrap w-[900px]">
                                {result.subclasses && result.subclasses.map((subclassess, index) => (
                                    <div
                                    className="w-[150px] h-[200px] rounded-xl m-2 flex flex-col justify-center items-center relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white shadow-lg"
                                    key={index}
                                    onClick={() => {
                                        window.location.href = url + "/public/materi/" + subclassess.materi;
                                    }}
                                    >
                                    <img
                                        src={url + "/public/image/" + subclassess.image}
                                        alt="Your Image"
                                        className="w-[90%] h-[70%] object-cover rounded-t-xl"
                                    />
                                    <div className="mt-3 text-center bg-black px-4 rounded-xl">
                                        <h3 className="text-md font-bold">{subclassess.name}</h3>
                                    </div>
                                    </div>
                                ))}
                            </div>
                            ) : ""}
                            
                            
                            
                        </section>
                        )}


                        
                    </section>

                </section>
                

                
            </main>
            
            <Footer/>



        </>
    )
}

export default Home;