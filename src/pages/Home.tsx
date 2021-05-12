import DrinksCard from '../components/DrinksCard';

const Home = () => {


    return (
      <div id='home'>
        <div className='row text-center'>
          <div className='col'>
            <h2 style={{fontFamily: 'fantasy', fontSize: '300%', marginTop: '2%'}}>Drinkify</h2>
             {/* <h3>You have {drinks.length} drinks!</h3> */}
             <div className='card'>
               <DrinksCard />
             </div>
             
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;