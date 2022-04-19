import React from 'react'
import { useRouter } from 'next/router'


const QueueDate = () => {
  const router = useRouter()
  const {dep} = router.query
  return (
    <div>queue-date {dep}</div>
  )
}

export default QueueDate