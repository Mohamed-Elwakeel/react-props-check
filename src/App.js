import "./App.css";
import { Profile } from "./profile/Profile";
import ME from "../src/assets/me.jpg";
import PropTypes from "prop-types";

const myProfile = {
  fullName: "Mohamed Hassan Elwakeel",
  profession: "Civil Engineer",
  bio: "A civil engineer graduate who is aspiring to be a fullstack web developer.",
};

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <Profile {...myProfile}>
        <img src={ME} alt="Photo of me!!" />
      </Profile>
    </div>
  );
}

export default App;
