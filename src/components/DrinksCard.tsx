import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { GlobalContext } from '../context/GlobalContext';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

interface CardProps {
  drink: Drink;
}

const DrinksCard: React.FC<CardProps> = ({ drink }) => {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async (): Promise<void> => {
    try {
      let prods = await (
        await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      ).json();

      setDrinks(prods);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(drinks);

    return (
  <div className='product-card-hover d-flex flex-column justify-content-between'>
     
      <div className='drinks'>

        {/* <div className=' '> */}
            
          {/* <div className=''> */}

            <div className=''>
            <h2>{drink.strDrink}</h2>

            {/** Beverage Image */}
            <div
            className='drink-img'
            style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}>  
            </div>

              <Link to={`/cocktails/${drink.idDrink}`}>Beverage Details</Link>

            {/** Type of Beverage */}
            <h4>"The {drink.strDrink} is an {drink.strAlcoholic} beverage."</h4>
            
            {/** Beverage Class */}
            <h4>Class</h4>
            <span>
              {drink.strCategory}
            </span>
            <div style={{fontSize: '80%', color: 'green'}}>
            <span>
             {drink.strTags} 
            </span>
            </div>

            <br/>

            </div>
          
      </div>
  </div>


    );
  };
  
  export default DrinksCard;