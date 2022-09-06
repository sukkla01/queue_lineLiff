import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'
import axios from 'axios'
import config from '../config'


const BASE_URL = config.BASE_URL
const token = config.token

const Showq = () => {
    const router = useRouter()
    const [profile, setProfile] = useState({})
    const [hn, setHn] = useState('')
    const [tname, setTname] = useState('')
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
        // getData()

    }, [])



    const onRefresh =()=>{

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
                                ชื่อ-สกุล : {tname} ทดสอบ
                            </div>
                            <div className='row' style={{ fontSize: 15, paddingTop: 10 }}>
                                HN : {hn} ทดสอบ
                            </div>
                        </div>
                    </div>
                </div>



                <div style={{ backgroundColor: 'white', height: 330,border:2, borderRadius: 15,marginTop : 10,textAlign:'center' }}>
                   <div style={{ fontSize : 18,paddingTop : 10,fontWeight : 'bold' }}>แผนกศัลยกรรมกระดูกและข้อ</div>
                   <div style={{ fontSize : 16,paddingTop : 10 }}>คิวปัจจุบัน / คิวของคุณ</div>
                   <div style={{ fontSize : 45,paddingTop : 5 }}> <span style={{ color:'red' }}>B005</span> / <span  style={{ color:'green' }}>B025</span></div>
                   <div style={{ fontSize : 12,paddingTop : 5 }}><i className="fa fa-refresh"  style={{ fontSize : 14,paddingRight : 5 }}></i> ข้อมูล ณ : 14:40:11 น.</div>

                   <div style={{ fontSize : 16,paddingTop : 50 }}>เวลาประมาณถึงคิวของคุณ</div>
                   <div style={{ fontSize : 16,paddingTop : 5}}>16:00:00 น.</div>
                   <div style={{ fontSize : 16,paddingTop : 5}}>**กรุณามารอก่่อน 20 นาที</div>

                </div>




            </div>
        </div>
    )
}

export default Showq