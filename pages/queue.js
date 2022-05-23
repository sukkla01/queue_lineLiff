import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'
import ProfilePage from '../component/ProfilePage'
import { Button, Radio } from 'antd';


const Queue = (value) => {
  const router = useRouter()
  const [profile, setProfile] = useState({})
  const [selectId, setSelectId] = useState(0)
  useEffect(() => {
    console.log('1234')
    localStorage.setItem('path', 'queue');
    async function getData() {
      const liff = (await import('@line/liff')).default
      await liff.ready
      const profile = await liff.getProfile()
      setProfile(profile)
    }
    // getData()
  })

  const onDep = (value) => {
    router.push({
      pathname: '/queue-date',
      query: { dep: value },
    })

  }

  const submit = () => {

  }

  return (
    <div>
      <NavHeader />

      <div style={{ paddingTop: '20%' }}>
        <ProfilePage />
        <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>เลือกแผนกจองคิว</h6>

        <div className='row' style={{ paddingTop: 5, paddingLeft: 15, paddingRight: 15 }}>

          <div className='col-6'>
            <div className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15 }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} />
              <p style={{ paddingTop: 0, fontSize: 19 }}>ทันตกรรม</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6'>
            <div className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15 }}>
              {/* <div className='row'> */}
              <img src={'./images/pharmacy.gif'} width={40} height={40} />
              <p style={{ paddingTop: 0, fontSize: 19 }}>ทันตกรรม</p>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className='row' style={{ paddingTop: 5, paddingLeft: 15, paddingRight: 15,paddingTop:10 }}>

          <div className='col-6'>
            <div className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 0, height: 100, borderRadius: 15 }}>
              {/* <div className='row'> */}
              <img src={'./images/pharmacy.gif'} width={40} height={40} />
              <p style={{ paddingTop: 0, fontSize: 19 }}>ทันตกรรม</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6'>
            <div className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15 }}>
              {/* <div className='row'> */}
              <img src={'./images/pharmacy.gif'} width={40} height={40} />
              <p style={{ paddingTop: 0, fontSize: 19 }}>ทันตกรรม</p>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <div className="card green" style={{ marginTop: 50 }} onClick={() => onDep(1)}>
          <h1>แพทย์แผนไทย</h1>
        </div>
        <div className="card purple" style={{ marginTop: 50 }} onClick={() => onDep(2)}>
          <h1>ทันตกรรม</h1>
        </div> */}
      </div>

      <div style={{ marginTop: 50, marginLeft: 20, marginRight: 20, marginBottom: 100 }} >
        <Button type={selectId != 0 ? "primary" : "default"} shape="round" block size={'large'} onClick={submit} >
          ตกลง
        </Button>
      </div>

    </div>
  )
}

export default Queue