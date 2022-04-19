import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'
import { initLiff } from '../component/initLiff'




const Queue = (value) => {
  const router = useRouter()
  const [profile, setProfile] = useState({})
  useEffect(() => {
    console.log('1234')
    localStorage.setItem('path', 'queue');
    setProfile(initLiff)
    // getData()
  })

  const onDep = (value) => {
    router.push({
      pathname: '/queue-date',
      query: { dep: value },
    })

  }

  return (
    <div>
      <NavHeader />
      <div className='text-center' style={{ marginTop: 100 }}>
        <h3 style={{ color: '#3f51b5' }}>เลือกแผนกจองคิว</h3>
        <div className="card green" style={{ marginTop: 50 }} onClick={() => onDep(1)}>
          <h1>แพทย์แผนไทย</h1>
        </div>
        <div className="card purple" style={{ marginTop: 50 }} onClick={() => onDep(2)}>
          <h1>ทันตกรรม</h1>
        </div>
      </div>

    </div>
  )
}

export default Queue