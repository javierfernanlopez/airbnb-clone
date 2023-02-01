import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import swimmer from "./images/image12.png";
import wedding from "./images/wedding1.png";
import bike from "./images/bike1.png"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="cards">
        <Card 
          img={swimmer}
          mark="5.0"
          reviews="(6) ·"
          country=" USA"
          description="Life lessons with Zaferes"
          price="136$ "
        />
                <Card 
          img={wedding}
          mark="5.0"
          reviews="(6) ·"
          country=" USA"
          description="Life lessons with Zaferes"
          price="136$ "
        />
                <Card 
          img={bike}
          mark="5.0"
          reviews="(6) ·"
          country=" USA"
          description="Life lessons with Zaferes"
          price="136$ "
        />
      </div>

    </div>
  );
}

export default App;
