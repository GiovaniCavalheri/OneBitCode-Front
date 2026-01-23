import Profile from "./Components/Profile";
import Me from "./assets/Me.jpeg"

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar={Me}
        name="Giovani Cavalheri"
        bio="Full-stack javascript developer at Acme Inc."
        email="developer.cavalheri@gmail.com"
        phone="+551899773-2006"
        githubUrl="https://github.com"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}
