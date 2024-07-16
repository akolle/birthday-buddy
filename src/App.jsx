import data from "./data";
import { useState } from "react";

const App = () => {
  
  const [list, setList] = useState(data);
  
  const clearAll = () => {
    setList([]);
  }

  return (
    <main>
      <section className="container">
        <h2 style={{margin: "50px"}}>test There are {list.length} birthdays today.</h2>
        {list.map((person) => {
          const {name, age, image} = person;
          return (
            <div>
              <h2>{name}</h2>
              <h4>{age}</h4>
              <img className='img' src={image}></img>   
            </div>
          )
        })}
        <button type="button" className="btn btn-block" onClick={clearAll}>clear all</button>
      </section>
    </main>
  )
  
};
export default App;
