import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'

const Login = () => {
    const { auth } = useActions()
    const navigate = useNavigate()

    const clickHandler = () => {
        auth('Vasya pupkin');
        window.localStorage.setItem('auth', true)
        window.localStorage.setItem('name', 'Vasya Pupkin')
        navigate('/dialog')
    }
    return (
        <div className='m-auto bg-blue-500 text-white w-2/4 h-1/4'>
            <div className='mx-auto mt-8 w-4/5'>
                <p>Username</p>
                <input className='w-full self-center mx-auto' type='text'/>
                <button onClick={clickHandler} className='mt-4 px-4 py-2 bg-rose-600'>Sing up</button>
            </div>
        </div>
    )
}

export default Login