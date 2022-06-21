import React,{useEffect} from 'react'
import NavHeader from '../component/NavHeader'
import { useRouter } from 'next/router'

const ReservSuccess = () => {
    const router = useRouter()
    useEffect(() => {
        
    }, []);
    const exit = () => {
        router.beforeLeavingPage(() => {
            // my callback
        })

    }
    return (
        <div>
            <NavHeader />
            <div style={{ paddingTop: '20%' }}>
                <div style={{ backgroundColor: 'white', marginLeft: 15, marginRight: 10, height: 200, borderRadius: 15 }}>
                    <div className='text-center' style={{ marginTop: 0 }}>
                        <div style={{ fontSize: 17, paddingTop: 20, fontWeight: 'bold' }}>
                            จองเรียบร้อยแล้ว
                        </div>
                        <img src={'./images/shield.gif'} width={80} height={80} style={{ borderRadius: '50%', marginTop: 20 }} />
                    </div>
                    <button onClick={exit}>closecx</button>
                </div>
            </div>
        </div>
    )
}

export default ReservSuccess