import React from 'react'

const RegisterSuccess = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        getCid()
    })


    const getCid = async (userId) => {
        try {
            let res = await axios.get(`${BASE_URL}/get-register-cid/${userId}`)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <NavHeader />

            <div style={{ paddingTop: '20%' }}>
                <div style={{ backgroundColor: 'white', marginLeft: 10, marginRight: 10, height: 500, borderRadius: 15 }}>
                    <p></p>
                    <div className='text-center' style={{ marginTop: 0 }}>
                        <h4 style={{ color: '#3f51b5', paddingTop: 20 }}>ลงทะเบียนเรียบร้อยแล้ว</h4>
                    </div>



                </div>
            </div>



        </div>
    )
}

export default RegisterSuccess