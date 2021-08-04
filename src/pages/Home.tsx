import { useContext, useEffect, useState, ChangeEvent } from 'react';
import DrinksCard from '../components/DrinksCard';
import { GlobalContext } from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {

  const {drinks, getDrinks} = useContext(GlobalContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(drinks);
  useEffect(() => {

    const searchData = drinks.filter(drink => {
      return (
        drink.strDrink?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    searchTerm === ''
      ? setFilteredData(drinks)
      : setFilteredData(searchData);
  }, [searchTerm, drinks]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value);
      setSearchTerm(event.target.value);
      console.log(event);
  };

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
            <form action="" className="my-4">
              <div className='input-group'>
                <input 
                type='text'
                className='form-control text-center'
                value={searchTerm}
                onChange={handleChange}
                placeholder='Search for a Drink'
                />
              </div>
            </form>
          </div>
        </div>

        <div className='row'>
          {filteredData.map((drink: Drink, i:number) => {
            return (
                 
              <div className='col-sm-12 col-md-4 mb-3 text-center'>

             <div key={i}>
               <DrinksCard drink={drink} />
             </div>

             </div>

            );               
          })}
        </div>
             
      </div>
    );
  };
  
  export default Home;
