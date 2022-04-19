import React from 'react'

const NavHeader = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
            <div className='text-center' >
                <img src='../images/logo.png' width={30} height={30} style={{ marginRight: 10 }} />
                <a className="navbar-brand" href="#">รพ.ศรัสัชนาลัย</a>
            </div>
        </nav>
    )
}

export default NavHeader