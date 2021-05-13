import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SingleDrinkCard from '../components/SingleDrinkCard';
import Loader from '../components/Loader';

const SingleDrink = () => {

  const { drink, getSingleDrink, is_loading } = useContext(GlobalContext);
  const { cocktailId } = useParams<{ cocktailId: string }>();

  console.log(cocktailId);

  useEffect(() => {
    getSingleDrink(cocktailId);
  }, [cocktailId]);

  if (!drink || is_loading) {
    return <Loader />;
  }

  return (
    <div id='single-drink'>
      <div className='row my-5'>
        <div className='col d-flex justify-content-center'>
          <SingleDrinkCard drink={drink}/>
        </div>
      </div>
    </div>
  );
};
  
  export default SingleDrink;