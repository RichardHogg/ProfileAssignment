
const EmployeeSummary = (
    props: {
        email: string
        firstName: string
        lastName: string
        picture: string
    }

) => {
    return (
        <>
            <img className='card img' src={props.picture} alt='' />
            <h1>{props.firstName + ' ' + props.lastName}</h1>
            <p>{props.email}</p>
        </>

    )
}

export default EmployeeSummary
