import styled from "styled-components";
import Avatar from "./Avatar";
import Details from "./Details";

const Profile = (props) => {
  return (
    <div>
      <Avatar {...props} />
      <Details {...props} />
    </div>
  );
};

export default Profile;
