import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'
import { Avatar, List, Skeleton, Switch } from 'antd';

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);

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
    // <div className='text-center'>กำลัง login.......</div>
    <Skeleton loading={loading} active avatar>
      <List.Item.Meta
        avatar={<Avatar src={'https://joeschmoe.io/api/v1/random'} />}
        title={<a href='#'>xxxxxxxx</a>}
        description={'ddddd'}
      />
     xxxx
    </Skeleton>
  )
}
