import React from 'react'

const AccountsProfile = ({ profilePic, icon, name, platform }) => {
    const style = {
        width: "196px",
        height: "40px"
    }
    return (
        <div className='m-2  d-flex align-items-center justify-content-between    ' style={style}>
            <div className="profile rounded-circle bg-dark" style={{width:"40px",height:"40px"}}>
                <img src={profilePic} alt={name} />
            </div>
            <div className="profile">
                <span className='d-block mb-0'>{name || "joes"}</span>
                <span className='d-block text-truncate ' style={{width:"120px"}}>{platform||"youtube channel"}</span>
            </div>
            <div className="profile">
            <i class="bi bi-x-circle-fill"></i>
            </div>
        </div>
    )
}

export default AccountsProfile


const data = {
    profilePic: "",
    icon: "",
    name: "Joes",
    platform: "Youtube Channel"
}