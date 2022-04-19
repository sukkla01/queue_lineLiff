import React from 'react'
import NavHeader from '../component/NavHeader'
import { Button, Radio } from 'antd';

const Success = () => {
  return (
    <div>
            <NavHeader />
            <div id="wrap" className='text-center' >
                <div className='text-center' style={{ marginTop: 100 }}>
                    <h4 style={{ color: '#3f51b5' }}>สมัครเรียบร้อยแล้ว</h4>

                </div>
                <img src='../images/success.png'  width={300}/>
            </div>
            <div id="footer" >
                <Button type="primary" shape="round" block size={'large'}  >
                    ปิด
                </Button>
            </div>

          
        </div>
  )
}

export default Success