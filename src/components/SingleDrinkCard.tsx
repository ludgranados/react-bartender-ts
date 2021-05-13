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

        <div className="col mb-3" style={{maxWidth: "700px"}}>
          <div className="row no-gutters">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div
                className='dr-bg-img'
                style={{ backgroundImage: `url(${drink.strDrinkThumb})` }}></div>
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{drink.strDrink}</h5>
                <p className="card-text">{drink.strGlass}</p>
                <p className="card-text">{drink.strInstructions}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="col mb-3" style={{maxWidth: "700px"}}>
          <div className="row no-gutters d-flex justify-content-center">

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Ingredients</h5>
                <p className="card-text">
                  <ul>
                    <li>{drink.strMeasure1} of {drink.strIngredient1}</li>
                    <li>{drink.strMeasure2} of {drink.strIngredient2}</li>
                    <li>{drink.strMeasure3} of {drink.strIngredient3}</li>
                    <li>{drink.strMeasure4} of {drink.strIngredient4}</li>
                    <li>{drink.strMeasure5} of {drink.strIngredient5}</li>
                    <li>{drink.strMeasure6} of {drink.strIngredient6}</li>
                    <li>{drink.strMeasure7} of {drink.strIngredient7}</li>
                    <li>{drink.strMeasure8} of {drink.strIngredient8}</li>
                    <li>{drink.strMeasure9} of {drink.strIngredient9}</li>
                    <li>{drink.strMeasure10} of {drink.strIngredient10}</li>
                    <li>{drink.strMeasure11} of {drink.strIngredient11}</li>
                    <li>{drink.strMeasure12} of {drink.strIngredient12}</li>
                    <li>{drink.strMeasure13} of {drink.strIngredient13}</li>
                    <li>{drink.strMeasure14} of {drink.strIngredient14}</li>
                    <li>{drink.strMeasure15} of {drink.strIngredient15}</li>
                  </ul>
                </p>
                <p className="card-text"><small className="text-muted">{drink.strCategory}</small></p>
                <p className="card-text"><small className="text-muted">{drink.strAlcoholic}</small></p>
                <p className="card-text"><small className="text-muted">{drink.dateModified}</small></p>
              </div>
            </div>
            
          </div>
        </div>

      </div>

    </div>
  );
};
  
  export default SingleDrinkCard;