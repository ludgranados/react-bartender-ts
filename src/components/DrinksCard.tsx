import { useState, useEffect } from 'react';

const DrinksCard = () => {
  const [drinks, setDrinks] = useState<Drink[]>([]);

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
      <div id='cart'>
        <div className='row text-center'>
          <div className='col'>
            <h2>Drinks Card!</h2>
            <h3>You have {drinks.length} drinks!</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default DrinksCard;