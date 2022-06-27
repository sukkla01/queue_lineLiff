import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'
const liffId = process.env.NEXT_PUBLIC_LIFF_ID

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { param } = router.query

  useEffect(() => {
    const fetchData = async () => {
      const liff = (await import('@line/liff')).default

      alert(param)

      try {
        await liff.init({ liffId })
      }
      catch (error) {
        console.error('liff error', error.message)
      }

      if (!liff.isLoggedIn()) {
        let path  = localStorage.getItem('path')
           
        //xxxxx
        // liff.login({ redirectUri : `https://queue-ss.diligentsoftinter.com/${path}` })
         

        
      }
    }
    fetchData()
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
