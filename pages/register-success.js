import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader';
import axios from 'axios'
import config from '../config'
import { useRouter } from 'next/router'
import QRCode from "react-qr-code";

const BASE_URL = config.BASE_URL

const RegisterSuccess = () => {

    const [data, setData] = useState([ ])
    const router = useRouter()
    const { userId } = router.query

    useEffect(() => {
        getCid()
    }, [])


    const getCid = async () => {
        try {
            let res = await axios.get(`${BASE_URL}/get-register-cid/${userId}`)
            console.log(res.data)
            setData(res.data)
        } catch (error) {
            console.log(error) 
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <NavHeader />
            {data.length > 0 ?
                <div style={{ paddingTop: '20%' }}>
                    <div style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10, height: 500, borderRadius: 15 }}>
                        <p></p>
                        <div className='text-center' style={{ marginTop: 0 }}>
                            <h4 style={{ color: '#3f51b5', paddingTop: 20 }}>ลงทะเบียนเรียบร้อยแล้ว</h4>
                            <img src={data[0].picture} width={80} height={80} style={{ borderRadius: '50%', marginTop:20,marginBottom:20 }} />
                            <p style={{ marginTop:10,fontSize:16  }}>{data[0].tname}</p>
                            <p style={{ marginTop:-10,fontSize:30 }}>{data[0].hn}</p>

                            <QRCode value={data[0].hn}  size ={120}/>
                        </div>



                    </div>
                </div> : ''}



        </div>
    )
}

export default RegisterSuccess