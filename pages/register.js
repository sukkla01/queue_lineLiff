import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader';
import { Button, Radio } from 'antd';

const Register = () => {
    const [count, setCount] = useState(0)
    const [profile, setProfile] = useState({})
    useEffect(() => {
        console.log('1234')
        localStorage.setItem('path', 'register');
        async function getData() {
            const liff = (await import('@line/liff')).default
            await liff.ready
            const profile = await liff.getProfile()
            setProfile(profile)
        }

        getData()
    })


    const submit = () => {

    }

    return (
        <div style={{ textAlign: "center" }}>
            {/* <NavHeader /> */}

            <div>
                {count == 1 ? <button onClick={() => setCount(count + 1)}>Click me</button> : ''}
                <p>SubID : {profile.userId}</p>
                { }

            </div>
        </div>
    )
}

export default Register