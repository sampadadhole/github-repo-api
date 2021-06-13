import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Repo from "./Repo";
import Profile from "./Profile";
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
      <Profile userData={userData} />
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
