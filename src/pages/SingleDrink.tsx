import SingleDrinkCard from '../components/SingleDrinkCard';

const SingleDrink = () => {
    return (
      <div id='single-drink'>
        <div className='row my-5'>
          <div className='col d-flex justify-content-center'>
            <SingleDrinkCard />
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleDrink;