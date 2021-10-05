import React from 'react'
/*import imd from './im.JPG';*/
const Pro = (props) => {
    return (
        <div>
            <h3>{props.fullName} </h3>
            <p>{props.bio}</p>
            < img src = { props.imageUrl} width="450px" alt="profile"/>
            <p>{props.profession}</p>
        </div>
    )
}

export default Pro
