import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { Button, Radio } from 'antd';

const Success = () => {

    const [alertM, setAlertm] = useState("x");

    const closeWindows = async () => {
        const liff = (await import('@line/liff')).default
        await liff.ready
        liff.closeWindow()
    }
    return (
        <div>
            <NavHeader />
            <div className='text-center' >
                <div className='text-center' style={{ marginTop: 100 }}>
                    <h4 style={{ color: '#3f51b5' }}>สมัครเรียบร้อยแล้ว </h4>

                </div>
                <img src='./images/shield.gif' width={100} />
                <div style={{ marginTop: 50, marginLeft: 20, marginRight: 20 }} >

                    <Button type="primary" shape="round" block size={'large'} onClick={closeWindows} >
                        ปิด
                    </Button>
                </div>
            </div>



        </div>
    )
}

export default Success