import Footer from "./Components/Footer";
import Header from "./Components/Header";
import JSXrules from "./Components/JSXrules";
import MainContent from "./Components/MainContent";
import WelcomeMessage from "./Components/WelcomeMessage";
import Greeting from "./Components/Greeting";
import { useState } from "react";
import ProductInfo from "./Components/ProductInfo";
import Lists from "./Components/Lists";
import UserData from "./Components/UserData";
import Products from "./Components/Products";
import Person from "./Components/Person";
import Weather from "./Components/weather";

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [showProductInfo, setShowProductInfo] = useState(false);

  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <JSXrules />
      <Footer />
      <button onClick={() => setShowGreeting(!showGreeting)}>Greeting</button>
      {showGreeting && <Greeting />}

      <button onClick={() => setShowProductInfo(!showProductInfo)}>Product Info</button>
      {showProductInfo && <ProductInfo />}
      <Lists />

    {UserData.map((user, index) => (
      <ul key={index}>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.age}</li>
      </ul>
    ))}

    <Products 
      name = "Macbook"
      price = {1200}
    />
    <Person 
      name = 'Valentine Gamma'
      age = {22}
    />
    <Weather temprature={16}/>
    </>
  )
}
export default App; 