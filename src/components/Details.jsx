import styled from "styled-components";

const Details = (props) => {
  const { userData } = props;
  // console.log(userData);
  return (
    <DetailsWrapper>
      <Name>{userData.name}</Name>
      <Bio>{userData.bio}</Bio>
      <Followers {...props} />
    </DetailsWrapper>
  );
};

export default Details;

const Followers = (props) => {
  const { userData } = props;
  return (
    <FollowerWrapper>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5 37.5H35V31.25C34.998 29.593 34.3389 28.0044 33.1672 26.8328C31.9956 25.6611 30.407 25.002 28.75 25V22.5C31.0698 22.5026 33.2939 23.4254 34.9343 25.0657C36.5746 26.7061 37.4974 28.9302 37.5 31.25V37.5Z"
          fill="black"
        />
        <path
          d="M27.5 37.5H25V31.25C24.998 29.593 24.3389 28.0044 23.1672 26.8328C21.9956 25.6611 20.407 25.002 18.75 25H11.25C9.59301 25.002 8.00445 25.6611 6.83278 26.8328C5.6611 28.0044 5.00198 29.593 5 31.25V37.5H2.5V31.25C2.50265 28.9302 3.42537 26.7061 5.06574 25.0657C6.70611 23.4254 8.93017 22.5026 11.25 22.5H18.75C21.0698 22.5026 23.2939 23.4254 24.9343 25.0657C26.5746 26.7061 27.4974 28.9302 27.5 31.25V37.5Z"
          fill="black"
        />
        <path
          d="M25 2.5V5C26.6576 5 28.2473 5.65848 29.4194 6.83058C30.5915 8.00269 31.25 9.5924 31.25 11.25C31.25 12.9076 30.5915 14.4973 29.4194 15.6694C28.2473 16.8415 26.6576 17.5 25 17.5V20C27.3206 20 29.5462 19.0781 31.1872 17.4372C32.8281 15.7962 33.75 13.5706 33.75 11.25C33.75 8.92936 32.8281 6.70376 31.1872 5.06282C29.5462 3.42187 27.3206 2.5 25 2.5Z"
          fill="black"
        />
        <path
          d="M15 5C16.2361 5 17.4445 5.36656 18.4723 6.05331C19.5001 6.74007 20.3012 7.71619 20.7743 8.85823C21.2473 10.0003 21.3711 11.2569 21.1299 12.4693C20.8888 13.6817 20.2935 14.7953 19.4194 15.6694C18.5453 16.5435 17.4317 17.1388 16.2193 17.3799C15.0069 17.6211 13.7503 17.4973 12.6082 17.0242C11.4662 16.5512 10.4901 15.7501 9.80332 14.7223C9.11656 13.6945 8.75 12.4861 8.75 11.25C8.75 9.5924 9.40848 8.00269 10.5806 6.83058C11.7527 5.65848 13.3424 5 15 5ZM15 2.5C13.2694 2.5 11.5777 3.01318 10.1388 3.97464C8.69983 4.9361 7.57832 6.30267 6.91606 7.90152C6.25379 9.50037 6.08051 11.2597 6.41813 12.957C6.75575 14.6544 7.58911 16.2135 8.81282 17.4372C10.0365 18.6609 11.5956 19.4942 13.293 19.8319C14.9903 20.1695 16.7496 19.9962 18.3485 19.3339C19.9473 18.6717 21.3139 17.5502 22.2754 16.1112C23.2368 14.6723 23.75 12.9806 23.75 11.25C23.75 8.92936 22.8281 6.70376 21.1872 5.06282C19.5462 3.42187 17.3206 2.5 15 2.5Z"
          fill="black"
        />
      </svg>
      <div>
        <p>Followers:&nbsp;{userData.followers}</p>
        <p>Following:&nbsp;{userData.following}</p>
      </div>
    </FollowerWrapper>
  );
};

const FollowerWrapper = styled.div`
  display: flex;
  align-items: center;
  path {
    fill: ${(props) => props.theme.text};
  }

  p {
    font-style: normal;
    font-weight: medium;
    font-size: 13px;
    line-height: 10px;
    text-transform: uppercase;
  }
`;

const DetailsWrapper = styled.div`
  text-align: left;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
`;
const Bio = styled.p`
  color: ${(props) => props.theme.text};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 100%;
`;
