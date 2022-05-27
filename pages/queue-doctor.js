import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavHeader from '../component/NavHeader'
import ProfilePage from '../component/ProfilePage'
import { Button } from 'antd';

const QueueDoctor = () => {

  let data = [
    { tname: 'xxx  xxxxx', dep: 'zzz zzzzz' },
    { tname: 'www  wwwww', dep: 'zzz zzzzz' }
  ]

  const onBack = () => {
    router.push({
      pathname: '/queue',
    })
  }

  const onNext = (value) => {
    router.push({
      pathname: '/queue-time',
      query: { dep: dep, date: dateShow },
    })


  }


  return (
    <div>
      <NavHeader />
      <div style={{ paddingTop: '20%' }}>
        {/* <ProfilePage /> */}
        <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>เลือกแพทย์</h6>

        {data.map((item, i) => {
          return <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 85, borderRadius: 15, marginTop: 10 }} key={i}>
            <div className='row' style={{ paddingTop: 15, paddingLeft: 10 }}>
              <div className='col-4'>
                <img src={'./images/user.png'} width={60} height={60} style={{ borderRadius: '50%' }} />

              </div>
              <div className='col-8'>
                <div className='row' style={{ fontSize: 15 }}>
                  แพทย์ : {item.tname}
                </div>
                <div className='row' style={{ fontSize: 15, paddingTop: 10 }}>
                  แผนก : {item.dep}
                </div>
              </div>
            </div>

          </div>
        })}


      </div>


      <div className='row' style={{ marginTop: 50, marginLeft: 10, marginRight: 10, marginBottom: 100 }} >
        <div className='col-6'>
          <Button type={"default"} shape="round" block size={'large'} onClick={onBack} >
            กลับ
          </Button>

        </div>
        <div className='col-6'>
          <Button type={"primary"} shape="round" block size={'large'} onClick={onNext} >
            ถัดไป
          </Button>

        </div>

      </div>
    </div>
  )
}

export default QueueDoctor