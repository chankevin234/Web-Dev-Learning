import { useEffect, useState } from "react";
import axios from "axios";

import ProfileSearchForm from "./ProfileSearchForm";

const api_url = "https://api.github.com/users";

export default function ProfileViewerWithSearch() {
  // set state of the initial username (from search bar)
  const [username, setUsername] = useState("chankevin234");

  // set state of the initial profile that's displayed (from API)
  const [profile, setProfile] = useState({ data: null, isLoading: true });

  // useEffect to output the initial profile
  useEffect(
    () => {
      async function fetchUserOnSearchChange() {
        const userResponse = await axios.get(`${api_url}/${username}`); // get user data from API
        setProfile({ data: userResponse.data, isLoading: false });
      }
      fetchUserOnSearchChange(); // immediately run this func
    },
    [username] // run this if the username value changes
  );

  // function passed down to search component
  function search(username) {
    setProfile({ data: null, isLoading: true }); // loading screen
    setUsername(username); // set the value of username (to be used in API search)
  }

  if (profile.isLoading) {
    return <i>Loading...</i>;
  } else {
    return (
      <div>
        <ProfileSearchForm search={search} />
        <img src={profile.data.avatar_url} alt="user" />
        <p>{profile.data.name}</p>
      </div>
    );
  }
}
