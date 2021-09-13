import React from 'react';


const User = (props) => {
    return (
        <>
            <div>
                Name: {props.name}
            </div>
            <div>
                Photo: <img src={props.picture} alt=""/>
            </div>
        </>
    )
}

export default User;