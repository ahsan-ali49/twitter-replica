import NavBar from "./NavBar";
import Tweet from "./Tweet";
import Trends from "./Trends";
import Profile from "./Profile";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Tweet />
      <Trends />
      <Profile />
    </div>
  );
}

export default App;
