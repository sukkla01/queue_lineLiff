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
      localStorage.setItem('profile', profile);
    }
    getData()
  })

  const onDep = (value) => {

    if (selectId != 0) {
      router.push({
        pathname: '/queue-date',
        query: { dep: selectId },
      })
    }


  }

  const onSelect = (id) => {
    setSelectId(id)
  }

  const submit = () => {

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

        <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>เลือกแผนกจองคิว</h6>

        <div className='row' style={{ paddingTop: 5, paddingLeft: 15, paddingRight: 15 }}>

          <div className='col-6'>
            <div onClick={() => onSelect(1)} className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15, borderColor: selectId == 1 ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid' }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} style={{ marginTop: 10 }} />
              <p style={{ paddingTop: 0, fontSize: 16 }}>จักษุวิทยา</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6'>
            <div onClick={() => onSelect(2)} className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15, borderColor: selectId == 2 ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid' }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} style={{ marginTop: 10 }} />
              <p style={{ paddingTop: 0, fontSize: 16 }}>โสต ศอ นาสิก</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6' style={{ marginTop: 15 }}>
            <div onClick={() => onSelect(3)} className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15, borderColor: selectId == 3 ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid' }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} style={{ marginTop: 10 }} />
              <p style={{ paddingTop: 0, fontSize: 16 }}>ศัลยกรรม</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6' style={{ marginTop: 15 }}>
            <div onClick={() => onSelect(4)} className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15, borderColor: selectId == 4 ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid' }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} style={{ marginTop: 10 }} />
              <p style={{ paddingTop: 0, fontSize: 16 }}>ออร์โธปิดิกส์</p>
              {/* </div> */}
            </div>
          </div>
          <div className='col-6' style={{ marginTop: 15 }}>
            <div onClick={() => onSelect(5)} className='text-center' style={{ backgroundColor: 'white', marginLeft: 0, marginRight: 5, height: 100, borderRadius: 15, borderColor: selectId == 5 ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid' }}>
              {/* <div className='row'> */}
              <img src={'./images/hos.gif'} width={40} height={40} style={{ marginTop: 10 }} />
              <p style={{ paddingTop: 0, fontSize: 16 }}>สูตินรีเวช</p>
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
        <Button type={selectId != 0 ? "primary" : "default"} shape="round" block size={'large'} onClick={onDep} >
          ตกลง
        </Button>
      </div>

    </div>
  )
}

export default Queue