import React from 'react'

const EmployeeSummary = (
    props: {
        email: string
        firstName: string
        lastName: string
        image: string
    }

) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <img className='img' src={props.image} />
                    <h1>{props.firstName + ' ' + props.lastName}</h1>
                    <p>{props.email}</p>

                </div>
            </div>
        </div>
    )
}

export default EmployeeSummary
