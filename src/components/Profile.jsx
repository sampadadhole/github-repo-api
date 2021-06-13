import styled from "styled-components";
import Avatar from "./Avatar";
import Details from "./Details";

const Profile = (props) => {
  return (
    <ProfileWrapper>
      <Avatar {...props} />
      <Details {...props} />
    </ProfileWrapper>
  );
};

export default Profile;

const ProfileWrapper = styled.div`
  display: flex;
  max-width: 60rem;
  width: 80%;
  border-radius: 10rem 1rem 1rem 10rem;
  border: 3px solid ${(props) => props.theme.brand};
`;
