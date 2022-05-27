import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import ProfilePage from '../component/ProfilePage'
import { Button } from 'antd';
import { useRouter } from 'next/router'


const QueueTime = () => {
  const router = useRouter()
  const [selectId, setSelectId] = useState(0)
  const { dep,date } = router.query

    let data = ['17:00', '18:00']


    const onSelect =(value)=>{
        setSelectId(value)
    }

    const onNext = (value) => {

        router.push({
          pathname: '/queue-time',
          query: { dep: dep,date :  dateShow},
        })
    
    
      }

      const onBack = (value) => {

        router.push({
          pathname: '/queue-date',
          query: { dep: dep},
        })
    
    
      }
    return (
        <div>
            <NavHeader />

            <div style={{ paddingTop: '20%' }}>
                {/* <ProfilePage /> */}
                <h6 style={{ color: 'black', paddingTop: 25, paddingLeft: 20, paddingRight: 15 }}>เลือกเวลาจองคิว</h6>


                <div className='row'>
                    {data.map((item, i) => {
                        console.log(item)
                        return <div className='col-4' key={i} >
                            <div className='text-center' style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 30, width: 100, borderRadius: 15,marginTop:15 , borderColor: selectId == item ? '#00bfa5' : 'white', borderWidth: 1, borderStyle: 'solid'}}
                            onClick ={()=>onSelect(item)}
                            >
                                <p style={{ paddingTop: 5 }}>{item}</p>
                            </div>

                        </div>
                    })}

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

export default QueueTime