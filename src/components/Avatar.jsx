import React from "react";
import styled from "styled-components";

function Avatar(props) {
  const { userData } = props;
  console.log(props);
  return (
    <div>
      <AvatarImg src={userData.avatar} alt="img" />{" "}
    </div>
  );
}

export default Avatar;

const AvatarImg = styled.img`
  height: 12rem;
  width: 12rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 50%;
  transform: translateX(-25px);
`;
