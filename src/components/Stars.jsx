import React from "react";

function Stars(props) {
  const { userData } = props;

  return <div>Stars:{userData.stars}</div>;
}

export default Stars;
