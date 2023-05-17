import React from "react";
import Footer from "../component/footer";
import axel from "../Image/axel.jpg";
import bella from "../Image/bella.jpg";
import ghN from "../Image/PIcture/cingN.png";
import ig from "../Image/PIcture/instagram.png";
import fb from "../Image/PIcture/facebook.png";
import twt from "../Image/PIcture/twitter.png";

const About = () => {
    return (
        <>
        <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>About Us</h1>
                    </a>
                </div>

                <div className="col-span-9 flex items-center justify-end text-white ml-[700px]">
                        <a href="/">
                            <h1 className="hover:text-yellow-400">Homepage</h1>
                        </a>
                        <a href="/materi?class=Books">
                            <h1 className='mx-[80px] hover:text-yellow-400'>All Books</h1>
                        </a>
                        <a href="/About">
                            <h1 className="hover:text-yellow-400">About Us</h1>
                        </a>
                </div>
            </header>



        <main className="container mx-auto px-4 py-10">
            <div className="flex gap-x-[40px] justify-center">

            <div className="bg-[#c919b1] rounded-lg shadow-lg overflow-hidden w-[230px]">
                    <img
                        className="object-cover h-[280px] w-[90%] m-auto rounded-t-lg mt-3"
                        src={bella}
                        alt=""
                    />
                    <div className="px-6 py-3">
                        <h1 className="font-bold text-xl mb-2">Vicken Manginsela</h1>
                        <div className="mt-2 flex">
                                <img src={ig} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://instagram.com/aurellllllia?igshid=MzRlODBiNWFlZA=="><p className="ml-2 hover:text-[white] text-[black]">
                                @aurellllllia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={fb} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://www.facebook.com/audrey.kussoy?mibextid=ZbWKwL"><p className="ml-2 hover:text-[white] text-[black]">
                                Audrey Kussoy
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={twt} alt="" className="w-[25px] h-[25px]"/>
                                <a href=""><p className="ml-2 hover:text-[white] text-[black]">
                                @aurelsonia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={ghN} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://github.com/audreyaurelle"><p className="ml-2 hover:text-[white] text-[black]">
                                audreyaurelle
                                </p></a>
                            </div>
                    </div>
                    <div className="px-6 py-4 ">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Frontend
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Desainer
                        </span>
                    </div>
                </div>

                <div className="bg-[#c919b1] rounded-lg shadow-lg overflow-hidden w-[230px]">
                    <img
                        className="object-cover h-[280px] w-[90%] m-auto rounded-t-lg mt-3"
                        src={axel}
                        alt=""
                    />
                    <div className="px-6 py-3">
                        <h1 className="font-bold text-xl mb-2">Vicken Manginsela</h1>
                        <div className="mt-2 flex">
                                <img src={ig} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://instagram.com/aurellllllia?igshid=MzRlODBiNWFlZA=="><p className="ml-2 hover:text-[white] text-[black]">
                                @aurellllllia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={fb} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://www.facebook.com/audrey.kussoy?mibextid=ZbWKwL"><p className="ml-2 hover:text-[white] text-[black]">
                                Audrey Kussoy
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={twt} alt="" className="w-[25px] h-[25px]"/>
                                <a href=""><p className="ml-2 hover:text-[white] text-[black]">
                                @aurelsonia
                                </p></a>
                            </div>
                            <div className="mt-2 flex">
                                <img src={ghN} alt="" className="w-[25px] h-[25px]"/>
                                <a href="https://github.com/audreyaurelle"><p className="ml-2 hover:text-[white] text-[black]">
                                audreyaurelle
                                </p></a>
                            </div>
                    </div>
                    <div className="px-6 py-4 ">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        Backend
                        </span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        Desainer
                        </span>
                    </div>
                </div>

                
            </div>
            
        </main>
        <Footer />
        </>
    );
    };

export default About;