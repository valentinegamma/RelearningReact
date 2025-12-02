import Footer from "./Components/Footer";
import Header from "./Components/Header";
import JSXrules from "./Components/JSXrules";
import MainContent from "./Components/MainContent";
import WelcomeMessage from "./Components/WelcomeMessage";
import Greeting from "./Components/Greeting";
import { useState } from "react";

function App() {
  const [showGreeting, setShowGreeting] = useState(false);

  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <JSXrules />
      <Footer />
      <button onClick={() => setShowGreeting(!showGreeting)}>Greeting</button>
      {showGreeting && <Greeting />}
    </>
  )
}
export default App;