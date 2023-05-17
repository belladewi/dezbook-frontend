import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { url } from "../utils/globalVariabel";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { sleep } from "../utils/utils";

const Login = () =>{
    const [loading, setLoading] = useState(false);
    const username = useRef();
    const password = useRef();
    const rePass = useRef();
    const Token = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const token = Cookies.get('token');
    useEffect(()=>{
        if(!token){
        navigate("/");
    }
    }, [navigate, token])

    const submitEvent = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const data = {
            username : username.current.value,
            password : password.current.value,
            rePass : rePass.current.value,
            token : Token.current.value
        }
        try {
            await axios.post(url+ "/login/register", data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            Swal.fire('Berhasil Ditambah', '', 'success');
            await sleep(1000);
            window.location.reload();
        } catch (error) {
            if (error.response) {
                setError("Register Gagal, coba lagi");
            } 
            Swal.fire('Gagal Di tambah', '', 'error');

        }
        
        setLoading(false);
    }

    return (
        <>

        {loading ? <div className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-blue-900 to-blue-500 h-screen w-screen flex items-center justify-center opacity-50 z-5">
            <div className="animate-pulse rounded-full h-20 w-20 border-4 border-blue-100"></div>
        </div> : ""}

        <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>Register</h1>
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

            <main className="text-white bg-yellow-500">
                <div className="justify-items-center text-black w-screen h-screen">
                    <form onSubmit={submitEvent}>
                        <div className="mx-auto w-max pt-[250px]">
                            <input 
                            type="text"
                            className="bg-transparent placeholder-black"
                            ref={username}
                            placeholder="Username"
                            />
                            <hr />
                        </div>
                        
                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={password}
                            className="bg-transparent placeholder-black"
                            placeholder="Password"
                            />
                            <hr />
                        </div>

                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={rePass}
                            className="bg-transparent placeholder-black"
                            placeholder="Retype Password"
                            />
                            <hr />
                        </div>

                        <div className="mx-auto w-max mt-[30px]">
                            <input
                            type="password" 
                            ref={Token}
                            className="bg-transparent placeholder-black"
                            placeholder="Token"
                            />
                            <hr />
                        </div>

                        {error ? <p className="block text-center mt-[10px] text-red-500">{error}</p>  : ""}
                        
                        <div className="bg-white block agline-middle rounded-md mx-auto w-max px-[100px] mt-[40px]">
                            <input 
                            className="font-bold text-[black]"
                            type="submit" 
                            disabled={loading}
                            value="Login" />
                        </div>
                    </form>
                </div>
            </main>
            
        </>
       
    );
}

export default Login;