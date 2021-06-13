// import { render } from "@testing-library/react"
import React from "react";

function Name(props) {
  const { userData } = props;

  //   console.log(userData.name);
  return (
    <div>
      <h1>{userData.name}</h1>
    </div>
  );
}

export default Name;
