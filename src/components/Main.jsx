import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import { Button, TextField } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
import Name from "./Name";
import Repo from "./Repo";
import Avatar from "./Avatar";
import Location from "./Location";
import Bio from "./Bio";
import Follow from "./Follow";
import Stars from "./Stars";
import useRepoDetails from "../hooks/useRepoDetails";

function Main() {
  const [inputBox, setInputBox] = useState("");
  const [user, setUser] = useState("sampadadhole");
  const { userData } = useRepoDetails(user);

  function handleSearch(e) {
    setInputBox(e.target.value);
  }

  function handleClick() {
    setUser(inputBox);
    setInputBox("");
  }

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div>
      <SearchHeader>
        <input value={inputBox} onChange={handleSearch} />

        <button type="button" onClick={handleClick}>
          Search
        </button>
      </SearchHeader>
      <CardStyle>
        <div className="flex">
          <AvatarStyles>
            <Avatar className="ava" userData={userData} />
          </AvatarStyles>
          <NameStyles>
            <Name className="name" userData={userData} />
            <BioStyles>
              <Bio userData={userData} />
            </BioStyles>
          </NameStyles>

          <LocationStyles>
            <h1>
              <LocationSvg />
            </h1>
            <Location className="loc" userData={userData} />
          </LocationStyles>
        </div>
        <div className="flex2">
          <FollowStyles>
            <Follow className="follow" userData={userData} />
          </FollowStyles>
          <Stars className="stars" userData={userData} />
        </div>
      </CardStyle>
      <RepoStyles>
        <Repo userData={userData} user={user} />
      </RepoStyles>
    </div>
  );
}

export default Main;

const SearchHeader = styled.div`
  margin: 1rem auto;
  /* color: white; */

  input {
    margin-top: 2rem;
    width: 10rem;
    border-radius: 0;
    height: 1.5rem;
    /* background-color: #a09797; */
  }
  button {
    margin: 0 auto;
    /* color: white; */
  }
`;

const CardStyle = styled.div`
  /* width: 47rem; */
  /* height: 13rem; */
  /* position: relative; */
  font-family: "Roboto", sans-serif;
  max-width: 60rem;
  min-height: 10rem;
  margin: 0 auto;
  background: #e0e0e0;
  border-radius: 162px 14px 14px 162px;

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .flex2 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const AvatarStyles = styled.div`
  img {
    border-radius: 50% 0% 0% 50%;
    height: auto;
    padding-top: 2rem;
  }
`;
const NameStyles = styled.div`
  margin-left: 0;
  padding-top: 2rem;
`;

const BioStyles = styled.div`
  font-size: 0.8rem;
  font-weight: lighter;
`;
const LocationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 1rem 2rem; */
  position: relative;
  margin: 0 12rem;

  h1 {
    position: absolute;
  }
`;

const FollowStyles = styled.div`
  padding: 1rem;
`;
const LocationSvg = () => (
  <svg
    width="20"
    height="25"
    viewBox="0 0 28 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 18.5833C16.6234 18.5833 18.75 16.4567 18.75 13.8333C18.75 11.21 16.6234 9.08334 14 9.08334C11.3766 9.08334 9.25 11.21 9.25 13.8333C9.25 16.4567 11.3766 18.5833 14 18.5833Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9999 1.16667C10.6405 1.16667 7.41869 2.50119 5.04323 4.87665C2.66777 7.25211 1.33325 10.4739 1.33325 13.8333C1.33325 16.829 1.96975 18.7892 3.70825 20.9583L13.9999 32.8333L24.2916 20.9583C26.0301 18.7892 26.6666 16.829 26.6666 13.8333C26.6666 10.4739 25.3321 7.25211 22.9566 4.87665C20.5811 2.50119 17.3593 1.16667 13.9999 1.16667V1.16667Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RepoStyles = styled.div`
  /* bor  der: 1rem solid black; */
`;
