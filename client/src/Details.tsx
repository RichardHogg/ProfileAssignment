
const Details = (
    props: {
        cell: string,
        email: string,
        dob: {
            age: number
            date: string
        }
        location: {
            city: string
            country: string
            postcode: number
            state: string
        }
        firstName: string
        lastName: string
        picture: string

    }

) => {
    return (
        
            <div>
                <img className='card img' src={props.picture} alt=''/>
                <h1>{props.firstName + ' ' + props.lastName}</h1>
                <p>{'Age: ' + props.dob.age}<br />
                    {'BOB: ' + props.dob.date}
                </p>
                <p>{props.email}</p>
                <p>{props.cell}</p>
                <p>{props.location.city}<br />
                    {props.location.state}<br />
                    {props.location.postcode}<br />
                    {props.location.country}<br />
                </p>
            </div>

    )
}

export default Details
