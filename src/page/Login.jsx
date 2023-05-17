import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { url } from "../utils/globalVariabel";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [loading, setLoading] = useState(false);
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const login = Cookies.get('token');
    useEffect(()=>{
        if(login){
          navigate("/");
        }
      }, [navigate, login])

    const submitEvent = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const data = {
            username : username.current.value,
            password : password.current.value
        }
        try {
            const result = await axios.post(url+ "/login", data);
            const accessToken = result.data.data.accessToken;
            const expirationDate = new Date(new Date().getTime() + (accessToken.expiredAt * 60 * 60 * 1000));
            Cookies.set("token", accessToken.token, { expires: expirationDate });
            Cookies.set("status", accessToken.role, { expires: expirationDate });
            navigate("/");
        } catch (error) {
            if (error.response) {
                const err = error.response.data.message.response;
                setError(err);
              } 
        }
        
        setLoading(false);
    }

    return (
        <>

        {loading ? <div className="fixed top-0 bottom-0 left-0 right-0 bg-gradient-to-br from-[#218537] to-[#92BB9B] h-screen w-screen flex items-center justify-center opacity-50 z-5">
            <div className="animate-pulse rounded-full h-20 w-20 border-4 border-blue-100"></div>
        </div> : ""}

        <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>Login</h1>
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

            <main className="text-black bg-yellow-500">
                
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

                        {error ? <p className="block text-center mt-[10px] text-red-500">{error}</p>  : ""}
                        
                        <div className="bg-[#61ac71] text-black block agline-middle rounded-md mx-auto w-max px-[100px] mt-[20px] hover:bg-white">
                            <input 
                            className="font-bold text-[#000000]"
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