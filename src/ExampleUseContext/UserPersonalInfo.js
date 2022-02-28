import React, { Component, useContext } from 'react'
import UserObContext from '../UserObContext';
import UserName from "./UserName"
const UserPersonalInfo = () => {
    const userOb = useContext(UserObContext);
    return(
        <div>
            <h2>Personal Info</h2>
            <UserName/>
            <div>Mobile:{userOb.personal.phoneNo}</div>
        </div>
    )
}

export default UserPersonalInfo;