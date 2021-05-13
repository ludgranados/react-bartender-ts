import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import SingleDrinkCard from '../components/SingleDrinkCard';

const SingleDrink = () => {

  const { drinks } = useContext(GlobalContext);

    return (
      <div id='single-drink'>
        <div className='row my-5'>
          <div className='col d-flex justify-content-center'>
            {drinks.map((drink:Drink, i:number) => {
              return (
                <SingleDrinkCard drink={drink} key={i}/>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleDrink;