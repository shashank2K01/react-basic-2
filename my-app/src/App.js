
import React, {useState} from 'react';
import data from './data';
import List from './List';
import './App.css';

function App(){


  const[people,SetPeople] = useState(data);
  return (
    <main>
      <section className = 'container'>
        <h2>{people.length} birthdays </h2>
        <List people = {people} />
        <button className="btn" onClick={()=>console.log('you clicked me')}>
          ADD
        </button>
      </section>
    </main>


  )

}

export default App;