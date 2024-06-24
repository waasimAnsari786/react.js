import "./App.css";
import Game from "./components/Game.jsx";
import Heading from "./components/Heading.jsx";

function App() {
  return (
    <>
      <Heading />
      <main className="container">
        <div className="row">
          <div className="col-xxl-5 xl-5 col-lg-5 col-md-6 col-sm-7 col-8 game-mb mx-auto">
            <div className="col-12">
              <Game />
              <Game />
              <Game />
              <Game />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
