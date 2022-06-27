import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'
const liffId = process.env.NEXT_PUBLIC_LIFF_ID

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [isLoad, setIsLoad] = useState(false)


  // const { param } = router.query

  useEffect(() => {
    const queryString = decodeURIComponent(window.location.search).replace("?liff.state=", "");
    const params = new URLSearchParams(queryString);
    const key = params.get('key');
    // alert(queryString)
    // alert(params)
    const fetchData = async () => {
      const liff = (await import('@line/liff')).default

      // alert(JSON.stringify(router.query))

      try {
        await liff.init({ liffId })
      }
      catch (error) {
        console.error('liff error', error.message)
      }

      if (!liff.isLoggedIn()) {
        let path = localStorage.setItem('path',key)
         liff.login({ redirectUri : `https://queue-ss.diligentsoftinter.com/${key}` })

      }

      setIsLoad(true)
    }
    fetchData()
  }, [])

  return   isLoad ?  <Component {...pageProps} /> : <></>
}

export default MyApp
