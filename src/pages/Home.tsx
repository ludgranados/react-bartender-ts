import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import DrinksCard from '../components/DrinksCard';
import { GlobalContext } from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

  const {drinks, getDrinks} = useContext(GlobalContext);

  useEffect(() => {
    getDrinks();
  },[])

    return (
      <div id='Home'>
        <div className='row text-center'>
        <div className='col'>
        <h2 
            style={{
              fontFamily: 'fantasy', 
              fontSize: '300%', 
              marginTop: '2%'
            }}>
         Drinkify
        </h2>
        </div>
        </div>

          

            <div className='row'>
            {drinks.map((drink: Drink, i:number) => {
               return (

                <div className='col-sm-12 col-md-4 mb-3 text-center' key={i}>
                  <DrinksCard drink={drink} />
                </div>

                <div key={i}>{drink.strDrink}
                <Link to={`/cocktails/${drink.idDrink}`}>{drink.strDrink}</Link></div>

               );
             })}
            </div>
             
          
        {/* </div> */}
      </div>
    );
  };
  
  export default Home;