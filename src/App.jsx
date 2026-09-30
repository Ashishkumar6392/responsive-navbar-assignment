import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-content" id="home">
        <div className="hero-copy">
          <span className="eyebrow">React Responsive Navbar</span>
          <h1>Resize the browser to test the navigation.</h1>
          <p>
            Desktop shows the full navbar, tablet opens a horizontal green menu,
            and mobile opens a full-screen vertical menu.
          </p>
        </div>
      </main>
    </>
  );
}

export default App;
