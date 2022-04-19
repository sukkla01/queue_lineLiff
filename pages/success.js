import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { Button, Radio } from 'antd';

const Success = () => {

    const [alertM, setAlertm] = useState("x");

    const closeWindows = async ()=>{
        setAlertm('gggg')

        const liff = (await import('@line/liff')).default
        setAlertm('vvvv')
        await liff.ready
        liff.closeWindow()
        setAlertm('zzzz')
    }
    return (
        <div>
            <NavHeader />
            <div id="wrap" className='text-center' >
                <div className='text-center' style={{ marginTop: 100 }}>
                    <h4 style={{ color: '#3f51b5' }}>สมัครเรียบร้อยแล้ว </h4>

                </div>
                <img src='../images/success.png' width={300} />
            </div>
            <div id="footer" >
                <div style={{ paddingLeft: 15, paddingRight: 15,marginTop : 50 }}>
                    {/* <Button type="primary" shape="round" block size={'large'}  onClick={closeWindows} >
                        ปิด
                    </Button> */}
                </div>
            </div>


        </div>
    )
}

export default Success