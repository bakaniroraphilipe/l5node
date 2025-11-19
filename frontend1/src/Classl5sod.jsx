const ClassNames = (props) => {
    return (
        <div className='id'>
            <h1><b>Personal Information </b></h1>
            <h1>First Name: {props.firstname}</h1>
            <h1>Last Name: {props.lastname}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Gender: {props.sex}</h1>
            <h1>Country: {props.country}</h1>
            <h1>City: {props.city}</h1>
            <h1>Zip Code: {props.zip}</h1>
            <h1>Phone Number: {props.phone}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Address: {props.address}</h1>
            <h1>Nationality: {props.nationality}</h1>
            <h1>Marital Status: {props.maritalStatus}</h1>
            <h1>Occupation: {props.occupation}</h1>
        </div>
    )
}
export default ClassNames;