import React, { Component } from 'react'
import { useContext } from 'react';
import UserObContext from '../UserObContext';
const UserProfessionalInfo = () => {
    const userOb = useContext(UserObContext);
    return(
        <div>
            <h2>Personal Info</h2>
            <div>company:{userOb.professional.company}</div>
            <div>Designation:{userOb.professional.designation}</div>
        </div>
    )
}

export default UserProfessionalInfo;