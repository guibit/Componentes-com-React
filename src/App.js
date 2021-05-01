import React from "react";
import './App.css';
import animals from './Componentes/data';
import AnimalCard from './Componentes/AnimalCard';

function App() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
        />
      )}
    </div>
  )
};


export default App;
