import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js"


function App() {
  const cards = data.map(item =>{
      return (
        <Card 
          key={item.id}
          item={item}
        />
      )
  })
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="cards">
        {cards}
      </div>

    </div>
  );
}

export default App;
