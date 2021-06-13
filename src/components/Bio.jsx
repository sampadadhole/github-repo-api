import React from "react"

function Bio(props){
    const {userData} =props
   
    return(
        <div>
            <h3>{userData.bio}</h3>
        </div>
    )
}

export default Bio