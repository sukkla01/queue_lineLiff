import React from 'react'
import NavHeader from '../component/NavHeader'
import { Button, Radio } from 'antd';

const Success = () => {
    const closeWindow = async ()=>{
        const liff = (await import('@line/liff')).default
        liff.closeWindow()
    }
    return (
        <div>
            <NavHeader />
            <div id="wrap" className='text-center' >
                <div className='text-center' style={{ marginTop: 100 }}>
                    <h4 style={{ color: '#3f51b5' }}>สมัครเรียบร้อยแล้ว</h4>

                </div>
                <img src='../images/success.png' width={300} />
            </div>
            <div id="footer" >
                <div style={{ paddingLeft: 15, paddingRight: 15,marginTop : 50 }}>
                    <Button type="primary" shape="round" block size={'large'}  >
                        ปิด
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default Success