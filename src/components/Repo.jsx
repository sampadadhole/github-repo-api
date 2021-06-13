import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Repo(props) {
  const { userData } = props;
  const [repos, setRepo] = useState([""]);
  // const [repoLink, setRepoLink] = useState([""])

  useEffect(() => {
    if (userData.login && userData.login.length > 0) {
      fetch(`https://api.github.com/users/${userData.login}/repos`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setRepo(data);
        });
    }
  }, [userData]);

  return (
    <div>
      <Repomainstyles>
        {repos.map((item) => (
          <Repodivstyles>
            <li>
              {item.name}
              <br />
              <p>{item.description}</p>
              <br />
              <a href={item.html_url} rel="noreferrer" target="_blank">
                Check out git
              </a>
            </li>
          </Repodivstyles>
        ))}
      </Repomainstyles>
    </div>
  );
}

export default Repo;

const Repomainstyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: wrap;
`;

const Repodivstyles = styled.div`
  width: auto;
  margin: 2rem 2rem;
  list-style: none;
  height: auto;
  -webkit-box-shadow: 6px 7px 33px -10px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 6px 7px 33px -10px rgba(0, 0, 0, 0.59);
  box-shadow: 6px 7px 33px -10px rgba(0, 0, 0, 0.59);
  li {
    font-size: 1.2rem;
  }
  p {
    font-size: 0.9rem;
  }
  a {
    font-size: 0.9rem;
  }
`;
