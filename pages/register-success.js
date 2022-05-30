import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader';
import axios from 'axios'
import config from '../config'

const BASE_URL = config.BASE_URL

const RegisterSuccess = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        getCid()
    })


    const getCid = async (userId) => {
        try {
            let res = await axios.get(`${BASE_URL}/get-register-cid/${userId}`)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <NavHeader />

            <div style={{ paddingTop: '20%' }}>
                <div style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10, height: 500, borderRadius: 15 }}>
                    <p></p>
                    <div className='text-center' style={{ marginTop: 0 }}>
                        <h4 style={{ color: '#3f51b5', paddingTop: 20 }}>ลงทะเบียนเรียบร้อยแล้ว</h4>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default RegisterSuccess