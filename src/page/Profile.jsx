import React, { useEffect, useState } from "react";
import Footer from "../component/footer";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { url } from "../utils/globalVariabel";

const Profile = () =>{
    const navigate = useNavigate();
    const token = Cookies.get('token');
    const [users, setUsers] = useState({});
    const getUser = async() =>{
        const result = await axios.get(url + "/login", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return result.data.data;
    };
    useEffect(()=>{
        getUser().then((result) => setUsers(result));
    }, []);


    const deleteCookies = ()=>{
        Cookies.remove("token");
        Cookies.remove("status");
        window.location.reload();
    }
    return (
        <>
            <header className="grid grid-cols-10 gap-4 items-center justify-items-center bg-[#135c17] p-3" >
                <div className="col-span-1 flex">
                    <a href="">
                    <h1 className='font-semibold text-white text-[24px] ml-[20px]'>Profile</h1>
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




            <main className="text-black bg-yellow-500 w-screen h-screen">
                <div className="mt-[]">
                    <p className="text-[#92BB9B]">p</p>
                </div>
                {token ? <> 

                <div className="mx-auto mt-[150px] block bg-white text-[26px] py-1 w-[80%] rounded-md">
                    <h1 className="flex">username : <p> {users.username}</p></h1> 
                </div>
                
                <div className="mx-auto mt-[30px] block bg-white text-[26px] py-1 w-[80%] rounded-md">
                    <h1 className="flex ">Status : <p className="capitalize"> {users.status}</p> </h1>
                </div>

                <button className="bg-[#62a871] hover:bg-[#469256] text-white font-bold py-2 px-4 rounded-xl mt-5 mx-auto block"
                    onClick={()=>{
                        deleteCookies();
                    }}
                    >Log Out</button>
                    <div className="rounded-xl p-1 bg-[#62a871] w-[5%] m-auto mt-[20px] hover:bg-[#469256]">
                        <a href="/Register">
                        <h1 className="text-center text-white">Register</h1>
                        </a>
                    </div>
                    
            </> : <button className="bg-[#62a871] hover:bg-[#469256] text-white font-bold py-2 px-4 rounded-xl mx-auto block text-[20px] mt-[200px]"
                    onClick={()=>{
                        navigate("/login")
                    }}
                    > Akses fitur lebih banyak <br /> dengan login terlebih dahulu :) <br /> <br /> Tekan disini untuk Login</button>}
                    
                </main>
            
            <Footer />
        </>
    );
}
export default Profile;