import { useContext, useEffect } from 'react';
import DrinksCard from '../components/DrinksCard';
import { GlobalContext } from '../context/GlobalContext';

const Home = () => {

  const {drinks, getDrinks} = useContext(GlobalContext);

  useEffect(() => {
    getDrinks();
  },[])

    return (
      <div id='home'>
        <div className='row text-center'>
          <div className='col'>
            <h2 style={{fontFamily: 'fantasy', fontSize: '300%', marginTop: '2%'}}>Drinkify</h2>
             <h3>You have {drinks.length} drinks!</h3>
             {drinks.map((drink: Drink, i:number) => {
               return (
                <div key={i}>{drink.strDrink}</div>
               );
             })}
             <div className='card'>
               <DrinksCard />
             </div>
             
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;