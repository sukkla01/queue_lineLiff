import { useState, useEffect } from "react"


const Test3 = () => {
    useEffect(() => {
        // responsiveVoice.speak("hello world")
        responsiveVoice.speak("สวัสดี", "Thai Female");
    }, [])
  return (
    <div>test3</div>
  )
}

export default Test3