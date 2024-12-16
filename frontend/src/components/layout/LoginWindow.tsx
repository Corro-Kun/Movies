'use client';

import style from '@/styles/components/layout/loginWindow.module.css';
import { useAuthStore } from '@/store/auth.state';
import { useWindowStore } from "@/store/window.state";
import Image from 'next/image';
import { useState } from 'react';

export default function LoginWindow() {
    const {active, setActive} = useWindowStore();
    const {setState} = useAuthStore();
    const [switcher, setSwitcher] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [censure, setCensure] = useState({
        password: false,
        confirmPassword: false,
    });

    function handleChange(e: any){
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmitLogin(e: any){
        e.preventDefault();

        const res = await fetch('http://localhost:4000/api/auth/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const Json = await res.json();

        if(res.status !== 201){
            alert(Json.message);
            return;
        }

        localStorage.setItem('token', Json.token);

        setActive(!active);
        setState(true);
    }

    async function handleSubmitSignUp(e: any){
        e.preventDefault();

        if(data.password !== data.confirmPassword){
            alert('Password not match');
            return;
        }

        const res = await fetch('http://localhost:4000/api/auth/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const Json = await res.json();

        if(res.status !== 201){
            alert(Json.message);
            return;
        }

        localStorage.setItem('token', Json.token);

        setActive(!active);
        setState(true);
    }

    return (
        <div className={style.main} style={{scale: active ? '1' : '0'}}>
            <div className={style.form} >
                <div className={style.out} >
                    <Image onClick={()=> setActive(!active)} src="/close.svg" alt="close" width={30} height={30} />
                    <p>Back</p>
                </div>
                <div className={style.bar} >
                    <div className={style.switch} >
                        <div className={style.box} style={switcher?{left: 0} : {right: 0}} />
                        <p onClick={()=> setSwitcher(true)} >Sign up</p>
                        <p onClick={()=> setSwitcher(false)} >Log In</p>
                    </div>
                </div>
                {switcher ?
                <form className={style.SignUp} onSubmit={(e) => handleSubmitSignUp(e)} >
                    <div className={style.input} >
                        <input type="text" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className={style.input} >
                        <input type={censure.password? 'text': 'password'} placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                        <Image src="/eye.svg" alt="eye" width={20} height={20} onClick={()=> setCensure({...censure, password: !censure.password})} />
                    </div>
                     <div className={style.input} >
                        <input type={censure.confirmPassword? 'text': 'password'} placeholder='Confirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} />
                        <Image src="/eye.svg" alt="eye" width={20} height={20} onClick={()=> setCensure({...censure, confirmPassword: !censure.confirmPassword})} />
                    </div>
                    <button>Continue</button>
                    <p>For any question, reach out to support@Quickbetdmovies.com</p>
                </form>
                :
                <form className={style.SignUp} onSubmit={(e) => handleSubmitLogin(e)} >
                    <p>We love having you back</p>
                    <div className={style.input} >
                        <input type="text" placeholder='Email' name='email' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className={style.input} >
                        <input type={censure.password? 'text': 'password'} placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                        <Image src="/eye.svg" alt="eye" width={20} height={20} onClick={()=> setCensure({...censure, password: !censure.password})} />
                    </div>
                    <button>Continue</button>
                    <p>For any question, reach out to support@Quickbetdmovies.com</p>
                </form>
                }

            </div>
            {switcher ?
            <div className={style.info} >
                <div className={style.title} >
                    <h1>Welcome to Quickbet Movies!</h1>
                </div>
                <div className={style.description} >
                    <p>🎬 Ready to unlock a universe of cinematic delights? Sign up new and start your journey with us!</p>
                </div>
                <picture>
                    <Image src="/sign_up.png" alt="sign up" width={500} height={500} />
                </picture>
            </div>
            :
            <div className={style.info} >
                <div className={style.title} >
                    <h1>Welcome back to Quickbet Movies!</h1>
                </div>
                <div className={style.description} >
                    <p>🍿 Ready to dive into the world of unlimited entertainment? Enter your credentials and let the cinematic adventure begin!</p>
                </div>
                <picture>
                    <Image src="/log_in.png" alt="log in" width={500} height={500} />
                </picture>
            </div>
            }
        </div>
    );
}