import React, { useEffect, useState } from 'react'
import NavHeader from '../component/NavHeader';
import { Button, Radio } from 'antd';
import { useRouter } from 'next/router'
import { initLiff } from '../component/initLiff'

const Register = () => {
    const router = useRouter()
    const [count, setCount] = useState(0)
    const [profile, setProfile] = useState({})
    const [alertM, setUAlertm] = useState("");
    const [formData, setFormData] = useState(
        {
            cid: '',
            tel: ''
        })
    useEffect(() => {
        console.log('1234')
        localStorage.setItem('path', 'register');
        // setProfile(initLiff)
    })


    const submit = () => {
        // e.preventDefault()

        let data = {
            cid : formData.cid,
            tel : formData.tel,
            userId : profile.userId,
            line_name : profile.displayName
        }
        if (formData.cid == '' || formData.tel == '') {
            setUAlertm('กรุณากรอกข้อมูลให้ครบ')
        }else{
            router.push('/success')

        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <NavHeader />

            <div id="wrap">
                <div className='text-center' style={{ marginTop: 0 }}>
                    <h4 style={{ color: '#3f51b5' }}>กรอกข้อมูลเพื่อสมัคร {initLiff}</h4>
                </div>

                <form>
                    <div style={{ paddingLeft: 20, paddingRight: 20, marginTop: 30 }}>
                        <img src={profile.pictureUrl} width={100} height={100} style={{ borderRadius: '50%' }} />
                        <div className="form-group" style={{ marginTop: 30 }}>
                            <input type="text" value={formData.cid} name='cid' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="เลขบัตรประจำตัวประชาชน"
                                onChange={e => {
                                    // setIsCode(false)
                                    setFormData({ ...formData, cid: e.target.value })
                                    setAlertm('')
                                }}
                            />
                        </div>
                        <div className="form-group" style={{ marginTop: 30 }}>
                            <input type="text" value={formData.tel} name='tel' className="form-control" id="exampleInputPassword1" placeholder="เบอร์โทร"
                                onChange={e => {
                                    // setIsCode(false)
                                    setFormData({ ...formData, tel: e.target.value })
                                    setAlertm('')
                                }}

                            />
                        </div>
                    </div>
                </form>
                <p style={{ color: 'red' }}>{alertM}</p>
            </div>

            <div>
                <img src='../images/3.png' />
            </div>
            <div id="footer" >
                <div style={{ paddingLeft : 15,paddingRight : 15  }}>
                <Button type={profile != {} ? "primary" : "default"} shape="round" block size={'large'} onClick={submit} >
                    สมัครเข้าใช้งาน
                </Button>
                </div>
                
                {/* <Button type="primary" shape="round" block size={'large'} onClick={logout} >
        logout
    </Button> */}
            </div>
        </div>
    )
}

export default Register