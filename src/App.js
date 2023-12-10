import Intro from "./Sections/Intro/Intro";
import "./Styles/App.css";

function App() {
  return (
    <>
      {/* <video autoPlay loop muted>
              <source src="videos/sunset.MP4" type='video/mp4' />
          </video>
    */}

      <div className="content">
        <Intro />
      </div>
      <div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
    </>
  );
}

export default App;
