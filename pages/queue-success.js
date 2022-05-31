import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import ProfilePage from '../component/ProfilePage'
import { Button } from 'antd';
import { useRouter } from 'next/router'



const QueueSuccess = () => {
    const router = useRouter()
    const [selectId, setSelectId] = useState(0)
    const { dep, date } = router.query
    const [name, setName] = useState('')
    const [userId, setUserId] = useState('')
    const [picture, setPicture] = useState('')
    const [hn, setHn] = useState('')
  
  
    useEffect(() => {
  
      // getData()
      setName(localStorage.getItem('tname'))
      setUserId(localStorage.getItem('userId'))
      setPicture(localStorage.getItem('picture'))
      setHn(localStorage.getItem('hn'))
    },[])
    const onBack = (value) => {

        router.push({
            pathname: '/queue-date',
            query: { dep: dep },
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
                            <img src={picture} width={80} height={80} style={{ borderRadius: '50%' }} />

                        </div>
                        <div className='col-8'>
                            <div className='row' style={{ fontSize: 15 }}>
                                ชื่อ - สกุล : {name}
                            </div>
                            <div className='row' style={{ fontSize: 15, paddingTop: 20 }}>
                                HN :
                            </div>
                        </div>
                    </div>
                </div>
                {/* Profile */}
               



               

               



            </div>
        </div>
    )
}

export default QueueSuccess