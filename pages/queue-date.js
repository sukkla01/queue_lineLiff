import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavHeader from '../component/NavHeader'
import ProfilePage from '../component/ProfilePage'
import * as moment from 'moment';
import 'moment/locale/th';
moment.locale('th')
import { Calendar, Button } from 'antd';
import { ConfigProvider } from 'antd';
import th_TH from 'antd/lib/locale/th_TH';

const QueueDate = () => {
  const router = useRouter()
  const { dep } = router.query
  const [dateShow, setSDateShow] = useState("");



  function onPanelChange(value, mode) {
    console.log(moment(value).format('YYYY-MM-DD'));
    setSDateShow(moment(value).format('ll'))
  }

  const onBack = () => {
    router.push({
      pathname: '/queue',
    })
  }

  const onNext = (value) => {

    router.push({
      pathname: '/queue-time',
      query: { dep: dep,date :  dateShow},
    })


  }


  

  return (
    <div>
      <NavHeader />

      <div style={{ paddingTop: '20%' }}>
        
        {/* Profile */}
        <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 110, borderRadius: 15 }}>
          <div className='row' style={{ paddingTop: 15, paddingLeft: 10 }}>
            <div className='col-4'>
              <img src={Object.keys(profile).length == 0 ? './images/user.gif' : profile.pictureUrl} width={80} height={80} style={{ borderRadius: '50%' }} />

            </div>
            <div className='col-8'>
              <div className='row' style={{ fontSize: 15 }}>
                ชื่อ - สกุล : {profile.displayName}
              </div>
              <div className='row' style={{ fontSize: 15, paddingTop: 20 }}>
                HN : xxxxxxxx
              </div>
            </div>
          </div>
        </div>
        {/* Profile */}
        <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>เลือกวันที่จองคิว</h6>

        <div className="site-calendar-demo-card" style={{ marginLeft: 15, marginRight: 10, borderRadius: 15 }}>
          <ConfigProvider locale={th_TH}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange}
              onChange={onPanelChange}
              locale='th_TH'
            />
          </ConfigProvider>
        </div>

        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 20 }} className="text-center">{dateShow}</p>
        </div>

        <div className='row' style={{ marginTop: 50, marginLeft: 10, marginRight: 10, marginBottom: 100 }} >
          <div className='col-6'>
            <Button type={"default"} shape="round" block size={'large'}  onClick={onBack} >
              กลับ
            </Button>

          </div>
          <div className='col-6'>
            <Button type={"primary"} shape="round" block size={'large'}  onClick={onNext} >
              ถัดไป
            </Button>

          </div>

        </div>


      </div>
    </div>
  )
}

export default QueueDate