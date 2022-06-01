import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'


import * as moment from 'moment';
import 'moment/locale/th';
moment.locale('th')
import axios from 'axios'
import config from '../config'

const BASE_URL = config.BASE_URL


const ReserveList = () => {
    const router = useRouter()
    const [selectId, setSelectId] = useState(0)
    const { dep, date } = router.query
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    const [picture, setPicture] = useState('')
    const [hn, setHn] = useState('')
    const [data, setData] = useState([])


   

    useEffect(() => {

        localStorage.setItem('path', 'reserve-list');
        async function getData() {
          const liff = (await import('@line/liff')).default
          await liff.ready
          const profile = await liff.getProfile()
          setProfile(profile)
          localStorage.setItem('name', profile.displayName);
          localStorage.setItem('userId', profile.userId);
          localStorage.setItem('picture', profile.pictureUrl);
    
          getDataRe(profile.userId)
          getCid(profile.userId)
        }
        getData()
        // getCid('U2c04ba314d6649a7f6f2cc3b554b0ad9')
      },[])


    const getDataRe = async (userIdv) => {
        try {
            let res = await axios.get(`${BASE_URL}/get-reserve/${userIdv}`)
            console.log(res.data)
            setData(res.data)

        } catch (error) {
            console.log(error)
        }
    }

    const getCid = async (userId) => {
        try {
          let res = await axios.get(`${BASE_URL}/get-register-cid/${userId}`)
          if (res.data.length > 0) {
            setHn(res.data[0].hn)
            setTname(res.data[0].tname)
            localStorage.setItem('tname', res.data[0].tname);
    
          } else {
    
            router.push({
              pathname: '/register',
              query: { userId: userId },
            })
          }
    
    
    
    
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <div>
            <NavHeader />

            <div style={{ paddingTop: '20%' }}>
                <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 110, borderRadius: 15 }}>
                    <div className='row' style={{ paddingTop: 15, paddingLeft: 10 }}>
                        <div className='col-4'>
                        <img src={Object.keys(profile).length == 0 ? './images/user.gif' : profile.pictureUrl} width={80} height={80} style={{ borderRadius: '50%' }} />

                        </div>
                        <div className='col-8'>
                            <div className='row' style={{ fontSize: 15 }}>
                                ชื่อ-สกุล : {name}
                            </div>
                            <div className='row' style={{ fontSize: 15, paddingTop: 10 }}>
                                HN : {hn}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Profile */}
                <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>รายการจอง {dep}</h6>
                {data.map((item,i) => {
                    return <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 80, borderRadius: 15, marginTop: 10 }} key ={i}>
                        <div className='row' style={{ paddingTop: 5, paddingLeft: 10 }}>
                            <div className='col-2'>
                                <img src='./images/calendar.gif' width={50} height={50} style={{ borderRadius: '50%', marginTop: 10 }} />
                            </div>
                            <div className='col-8'>
                                <div>แผนก : { item.name }</div>
                                <div style={{ marginTop: 5 }}>วันที่จอง : {moment(item.nextdate).format('ll')}</div>
                                <span style={{ marginTop: 5 }}>รอการตรวจสอบ</span>
                            </div>

                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default ReserveList