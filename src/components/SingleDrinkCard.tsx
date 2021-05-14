import React from 'react';
import '../App.css';

interface DrinkProps {
  drink: Drink | undefined;
}

const SingleDrinkCard:React.FC<DrinkProps> = ( {drink} ) => {

  if (!drink) {
    return <div>There is no drink to show!</div>;
  }

  return (
    <div id='single-drink-card'>
      <div className="row card d-flex justify-content-center align-items-center">

        <div className="col mt-5">
          <div className="row no-gutters">
            <div className="d-flex justify-content-center align-items-center">
              <div
                className='dr-bg-img'
                style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}></div>
            </div>

            <div className="text-center">
              <div className="card-body">
                <h5 className="card-title">{drink.strDrink}</h5>
                <p className="card-text">Glass type - {drink.strGlass}</p>
                <p className="card-text">Drink category - {drink.strCategory}</p>
                <p className="card-text">Alcoholic? - {drink.strAlcoholic}</p>
              </div>
            </div>

          </div>
        </div>

          <div className="row no-gutters">
            <div className="col mb-5">
                <div className="card-body text-center">
                  <h5 className="card-title">Ingredients</h5>
                    <ul className="card-text list-unstyled">
                      {!drink.strIngredient1 ? '' : <li>{drink.strMeasure1} {drink.strIngredient1}</li>}
                      {!drink.strIngredient2 ? '' : <li>{drink.strMeasure2} {drink.strIngredient2}</li>}
                      {!drink.strIngredient3 ? '' : <li>{drink.strMeasure3} {drink.strIngredient3}</li>}
                      {!drink.strIngredient4 ? '' : <li>{drink.strMeasure4} {drink.strIngredient4}</li>}
                      {!drink.strIngredient5 ? '' : <li>{drink.strMeasure5} {drink.strIngredient5}</li>}
                      {!drink.strIngredient6 ? '' : <li>{drink.strMeasure6} {drink.strIngredient6}</li>}
                      {!drink.strIngredient7 ? '' : <li>{drink.strMeasure7} {drink.strIngredient7}</li>}
                      {!drink.strIngredient8 ? '' : <li>{drink.strMeasure8} {drink.strIngredient8}</li>}
                      {!drink.strIngredient9 ? '' : <li>{drink.strMeasure9} {drink.strIngredient9}</li>}
                      {!drink.strIngredient10 ? '' : <li>{drink.strMeasure10} {drink.strIngredient10}</li>}
                      {!drink.strIngredient11 ? '' : <li>{drink.strMeasure11} {drink.strIngredient11}</li>}
                      {!drink.strIngredient12 ? '' : <li>{drink.strMeasure12} {drink.strIngredient12}</li>}
                      {!drink.strIngredient13 ? '' : <li>{drink.strMeasure13} {drink.strIngredient13}</li>}
                      {!drink.strIngredient14 ? '' : <li>{drink.strMeasure14} {drink.strIngredient14}</li>}
                      {!drink.strIngredient15 ? '' : <li>{drink.strMeasure15} {drink.strIngredient15}</li>}
                    </ul>
                    <h5 className="card-text mt-4">Instructions</h5>
                    <p className="card-text">{drink.strInstructions}</p>
                    <p className="card-text mt-4"><small className="text-muted">Last date modified - {drink.dateModified}</small></p>
                </div>
            
            </div>
          </div>

      </div>

    </div>
  );
};
  
  export default SingleDrinkCard;