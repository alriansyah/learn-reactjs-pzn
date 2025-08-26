import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";

function ProfileApp() {
  return (
    <>
      <ProfileContext.Provider value={"Eko"}>
        <h1>Profile App</h1>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}

export default ProfileApp;
