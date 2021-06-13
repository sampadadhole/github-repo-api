import { useEffect, useState } from "react";

function useRepoDetails(user) {
  const [userData, setUserData] = useState({
    avatar: "",
    name: "",
    stars: "",
    location: "",
    repo: "",
    bio: "",
    followers: "",
    following: "",
    login: "",
  });
  const [repos, setRepos] = useState([""]);

  useEffect(() => {
    console.log("initial, fetch");
    if (user.length > 0) {
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData({
            ...userData,
            name: data.name,
            login: data.login,
            avatar: data.avatar_url,
            location: data.location,
            repo: data.repos_url,
            bio: data.bio,
            followers: data.followers,
            following: data.following,
            stars: data.stars,
          });
        })

        .catch((err) => console.log(err));
    }
  }, [user]);

  useEffect(() => {
    if (userData.login && userData.login.length > 0) {
      fetch(`https://api.github.com/users/${userData.login}/repos`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setRepos(data);
        });
    }
  }, [userData]);

  return { userData, repos };
}

export default useRepoDetails;
