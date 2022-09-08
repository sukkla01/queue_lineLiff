import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'
import axios from 'axios'
import config from '../config'
import moment from 'moment';

const BASE_URL = config.BASE_URL
const token = config.token

const Showq = () => {
    const router = useRouter()
    const [profile, setProfile] = useState({})
    const [data, setData] = useState([])
    const [hn, setHn] = useState('0120257')
    const [q_current, setQcurrent] = useState('')
    const [tname, setTname] = useState('')
    const [ctime, setCtime] = useState('')
    const [next_time, setNextTime] = useState('')
    useEffect(() => {

        localStorage.setItem('path', 'queue');
        async function getData() {
            const liff = (await import('@line/liff')).default
            await liff.ready
            const profile = await liff.getProfile()
            console.log(profile)
            setProfile(profile)
            localStorage.setItem('name', profile.displayName);
            localStorage.setItem('userId', profile.userId);
            localStorage.setItem('picture', profile.pictureUrl);

            getCid(profile.userId, profile.pictureUrl)

        }
        // getQueueName('0120257')
        getData()


        const interval = setInterval(() => {
            console.log('This will run every second!');
            getQueueName(hn)
        }, 180000);
        return () => clearInterval(interval);

    }, [])



    const getCid = async (userId,pictureUrl) => {
        try {
          let res = await axios.get(`${BASE_URL}/get-register-cid/${userId}`, { headers: { "token": token } })
          if (res.data.length > 0) {
            setHn(res.data[0].hn)
            getQueueName(res.data[0].hn)
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


    const getQueueName = async (hn) => {
        let regExp = /[^A-Z]/g;
        try {
            let res = await axios.get(`http://110.49.126.23:4001/get-queue-person/${hn}`)
            let tmp1 = res.data[0].current_queue.toUpperCase().replace(regExp, '')
            let tmp_current = parseInt(res.data[0].current_queue.replace(tmp1,''))
            let tmp2 = res.data[0].queue_slot_number.toUpperCase().replace(regExp, '')
            let tmp_slot = parseInt(res.data[0].queue_slot_number.replace(tmp2,''))

            let minute_ = ( tmp_slot - tmp_current) * 5
            // console.log(tmp_current)
            console.log(minute_)
            setData(res.data)

            // console.log(res.data[0].current_queue)
            // console.log(q_current)
            if(res.data[0].current_queue == q_current){
                // setNextTime
                console.log('s')
                // setNextTime(moment().add(20, 'minutes').format('HH:mm:ss'))
            }else{
                tmp_slot < tmp_current  ? '' :  setNextTime(moment().add(minute_, 'minutes').format('HH:mm:ss'))
            }
            setQcurrent(res.data[0].current_queue)
            setCtime(moment().format('HH:mm:ss'))


        } catch (error) {
            console.log(error)
        }
    }

    const onRefresh = () => {

    }

    return (
        <div>
            <NavHeader />
            <div className='container' style={{ paddingTop: '17%' }}>
                <div style={{ backgroundColor: 'white', height: 110, borderRadius: 15 }}>
                    <div className='row' style={{ paddingTop: 15, paddingLeft: 10 }}>
                        <div className='col-4'>
                            <img src={Object.keys(profile).length == 0 ? './images/user.gif' : profile.pictureUrl} width={80} height={80} style={{ borderRadius: '50%' }} />

                        </div>
                        <div className='col-8'>
                            <div className='row' style={{ fontSize: 15 }}>
                                ชื่อ-สกุล : {tname} 
                            </div>
                            <div className='row' style={{ fontSize: 15, paddingTop: 10 }}>
                                HN : {hn} 
                            </div>
                        </div>
                    </div>
                </div>



                {data.map((item, i) => {
                    return <div style={{ backgroundColor: 'white', height: 330, border: 2, borderRadius: 15, marginTop: 10, textAlign: 'center' }} key={i}>
                        <div style={{ fontSize: 18, paddingTop: 10, fontWeight: 'bold' }}>{item.opd_qs_room_name}</div>
                        <div style={{ fontSize: 16, paddingTop: 10 }}>คิวปัจจุบัน / คิวของคุณ</div>
                        <div style={{ fontSize: 45, paddingTop: 5 }}> <span style={{ color: 'red' }}>{q_current}</span> / <span style={{ color: 'green' }}>{item.queue_slot_number}</span></div>
                        <div style={{ fontSize: 12, paddingTop: 5 }}><i className="fa fa-refresh" style={{ fontSize: 14, paddingRight: 5 }} onClick={() => getQueueName(hn)}></i> ข้อมูล ณ : {ctime} น.</div>

                        <div style={{ fontSize: 16, paddingTop: 50 }}>เวลาประมาณถึงคิวของคุณ</div>
                        <div style={{ fontSize: 16, paddingTop: 5 }}>{ next_time } น.</div>
                        <div style={{ fontSize: 16, paddingTop: 5 }}>** กรุณามารอก่อน 20 นาที **</div>

                    </div>
                })}






            </div>
        </div>
    )
}

export default Showq