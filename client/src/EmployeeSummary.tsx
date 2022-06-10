import React from 'react'

const EmployeeSummary = (
    props: {
        email: string
        firstName: string
        lastName: string
        picture: string
    }

) => {
    return (
        <div>
            <img src={props.picture} alt='' />
            <h1>{props.firstName + ' ' + props.lastName}</h1>
            <p>{props.email}</p>
        </div>


    )
}

export default EmployeeSummary
