'use client';

import style from '@/styles/components/layout/profile.module.css';
import { useAuthStore } from '@/store/auth.state';
import { useWindowStore } from '@/store/window.state';
import Image from "next/image";
import { useEffect, useState} from 'react';

export default function Profile() {
    const {active, setActive} = useWindowStore();
    const {auth, setState} = useAuthStore();
    const [bar, setBar] = useState(false);

    async function verify(){
        if(localStorage.getItem('token')){
            setState(true);
            return
        }

        const res = await fetch('http://localhost:4000/api/auth/verify',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: localStorage.getItem('token')
        });

        if (res.status === 201){
            setState(true);
            return
        }
    }

    function logout(){
        localStorage.removeItem('token');
        setState(false);
    }

    useEffect(()=>{
        verify();
    },[]);

    if (auth){
        return(
            <div className={style.box} >
                <Image className={style.main} src="/user_online.svg" alt="user" width={30} height={30} onClick={()=> setBar(!bar)} />
                <div className={style.config} style={ bar? {} : {display: 'none'}} >
                    <button onClick={()=>logout()} >go out</button>
                </div>
            </div>
        );
    }

    return (
        <Image onClick={()=> setActive(!active)} className={style.main} src="/user_offline.svg" alt="user" width={30} height={30}/>
    )
}