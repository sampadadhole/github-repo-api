import React from "react"
import styled from 'styled-components'

function Avatar(props){
    const {userData} = props
    return(
        <div>
             <AvatarImg src={userData.avatar} alt="img"/>
        </div>
    )
}

export default Avatar

const AvatarImg = styled.img`
height: 10rem;
width:10rem;
margin: 0 auto;
padding: 1rem;
`;