import React from "react";

function Follow(props) {
  const { userData } = props;
  return (
    <div>
      <p>
        Followers:{userData.followers} Following:{userData.following}
      </p>
    </div>
  );
}

export default Follow;
