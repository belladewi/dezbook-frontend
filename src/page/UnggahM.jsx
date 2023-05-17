import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { url } from "../utils/globalVariabel";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Footer from "../component/footer";


const UnggahM = () =>{
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const materi = searchParams.get("class");
    const [classess, setClassess] = useState([]);
    const [error, setError] = useState("");
    const inputMateri = useRef();
    const files = useRef();
    const gambar = useRef();
    const token = Cookies.get('token');
    const getClassess = async() =>{
        const result = await axios.get(url + "/class");

        return result.data.data;
    };
    useEffect(()=>{
        getClassess().then((result) => setClassess(result));
    }, []);

    const handleSubmit = async() =>{
        const data = {
            name: inputMateri.current.value,
            class: materi,
            materi: files.current.files[0],
            image: gambar.current.files[0]
        };
        const isDataValid = Object.values(data).every(val => val !== undefined && val !== '');

        if(!isDataValid){
            setError("Data Belum Lengkap");
            return;
        }
        
        try {
            await axios.post(url + "/class/subClass", data, {
                headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${token}`
              }},)
              window.location.reload();
        } catch (error) {
            console.log("gagal")
        }

    }

    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>Upload Data</h1>
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
            
            <main className="items-center justify-items-center w-full p-1 bg-[#92BB9B] h-screen">
                <div className="">
                    
                </div>
                <div className="flex mx-auto mt-[25px]">
                <h1 className="ml-[30px] mr-[60px] text-[18px]">Unggah Data </h1>
                <div>
                    <div className="flex">
                        {classess && classess.map((result, index)=>
                            <div className={`text-[16px] rounded-[20px] ${materi === result.name ? "text-white bg-green-500" : "text-black bg-white"} px-[13px] py-[6px] mx-3`} key={index}>
                                {result.name}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {error ? <p className="text-red-500 text-center mt-3 font-bold text-[20px]">File Tidak Berhasil Ditambahkan</p> : ""}
            <div className="flex mt-[24px] mr-[32px]">
                <h1 className="text-[18px] ml-[30px] mr-[70px]">Judul Materi</h1>
                <div className="relative">
                    <div className=" bg-white rounded-[5px]">
                    <input type="text" className="w-[180px] h-[25px] rounded-[5px] text-[15px]"
                    ref={inputMateri}
                    />
                    </div>
                </div>
            </div>

            <div className="flex mt-[33px] mr-[30px]">
                <h1 className="text-[18px] ml-[30px] mr-[67px] pr-6">Unggah File</h1>
                <div className="relative">
                    <div className=" rounded-[5px] mb-4">
                    <input ref={files} type="file" class="block w-full text-sm text-black
                        file:mr-2 file:py-1 file:px-4
                        file:rounded-full file:border-0
                        file:text-[14px]
                        file:bg-white file:text-black
                        hover:file:bg-white"/>
                    </div>
                    <h1 className="text-[16px]">
                        Tipe file yang bisa diunggah bersifat bebas
                    </h1>
                    <h1 className="text-[16px]">
                        File materi yang sudah diunggah <span className="text-red-500">tidak bisa disunting lagi</span> 
                    </h1>
                </div>
            </div>
            <div className="flex mt-[33px] mr-[30px]">
                <h1 className="text-[18px] ml-[30px] mr-[67px]">Unggah Gambar</h1>
                <div className="relative">
                    <div className=" rounded-[5px] mb-4">
                    <input ref={gambar} type="file" class="block w-full text-sm text-black
                        file:mr-2 file:py-1 file:px-4
                        file:rounded-full file:border-0
                        file:text-[14px]
                        file:bg-white file:text-black
                        hover:file:bg-white"/>
                    </div>
                    <h1 className="text-[16px]">
                        Tipe file yang bisa diunggah adalah (<span className="text-red-500">.png</span>), (<span className="text-red-500">.jpg</span>)
                        , dan (<span className="text-red-500">.jpeg</span>)
                    </h1>
                    <h1 className="text-[16px]">
                        Ukuran file <span className="text-red-500">Maksimal 2MB</span>
                    </h1>
                    <h1 className="text-[16px]">
                        File Image yang sudah diunggah <span className="text-red-500">tidak bisa disunting lagi</span>
                    </h1>
                </div>
            </div>
            
            <button 
            
            onClick={() => {handleSubmit()}}
            className="bg-green-500 px-7 m-auto block mt-[70px] rounded-full text-white font-bold text-[15px] py-2">Kirim Materi</button>


            </main>
            
            <Footer/>
        </>
       
    );
}

export default UnggahM;