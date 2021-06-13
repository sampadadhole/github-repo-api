import React from "react";
import styled from "styled-components";

function Location(props) {
  const { userData } = props;
  return (
    <div>
      <LocStyles>
        <p>{userData.location}</p>
      </LocStyles>
    </div>
  );
}

export default Location;
const LocStyles = styled.div`
  margin: 2rem auto;
`;
