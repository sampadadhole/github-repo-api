import React from "react";
import styled from "styled-components";

function Repo(props) {
  const { repos } = props;

  return (
    <div>
      <Repomainstyles>
        {repos.map((item) => (
          <RepoContainer>
            <li>
              {" "}
              <a href={item.html_url} rel="noreferrer" target="_blank">
                <LinkIcon />
              </a>
              <p className="label">Name</p>
              <p className="text-md">{item.name}</p>
              <hr />
              <p className="label">description</p>
              <p className="text-sm">{item.description}</p>
            </li>
          </RepoContainer>
        ))}
      </Repomainstyles>
    </div>
  );
}

export default Repo;

const LinkIcon = () => {
  return (
    <StyledIcon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 8.5L19 1"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 1H19V6"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 12V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledIcon>
  );
};

const StyledIcon = styled.svg`
  position: absolute;
  right: 7px;
  top: 7px;
  path {
    stroke: ${(props) => props.theme.brand};
  }
`;

const Repomainstyles = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: wrap;
`;

const RepoContainer = styled.div`
  max-width: 20rem;
  position: relative;
  margin: 2rem;
  list-style: none;
  text-align: left;
  border: 3px solid ${(props) => props.theme.brand};
  border-radius: 1rem;
  padding: 0.5rem;

  .label {
    font-size: 10px;
    text-transform: uppercase;
    line-height: 100%;
  }
  .text-sm {
    font-size: 14px;
  }
  .text-md {
    line-height: 100%;
  }

  &:hover {
    border: 3px solid ${(props) => props.theme.brandDark};
    path {
      stroke: ${(props) => props.theme.brandDark};
    }
  }
`;
