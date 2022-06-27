import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button } from 'antd'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const queryString = decodeURIComponent(window.location.search).replace("?liff.state=", "");
    const params = new URLSearchParams(queryString);
    const tkey = params.get('key');
    // alert(path)
    router.push(`/${tkey}`)



    // if (path == 'test') {
    //   router.push(`/test`)
    // }
    // else if (path == 'myprofile') {
    //   router.push('/myprofile')
    // }
    // else {
    //   router.push('/')
    // }
  }, [])
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      test index
    </div>
  )
}
