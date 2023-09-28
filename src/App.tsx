import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/Home/HomePage";

function App() {
  return (
    <div id="top">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
