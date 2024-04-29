
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './componentes/CoffeeCard';
import { useState } from 'react';

function App() {
  
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees)
  return (
    <div>
      <h1 className='text-xl text-center'>Coffee Store Client Side: {coffees.length} </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id}
             coffee={coffee}
             coffees ={coffees}
             setCoffees={setCoffees}
             ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
