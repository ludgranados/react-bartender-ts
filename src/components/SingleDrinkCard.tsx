const SingleDrinkCard = () => {
    return (
      <div id='single-drink-card'>
        <div className="row card d-flex justify-content-center align-items-center">

          <div className="col mb-3" style={{maxWidth: "700px"}}>
            <div className="row no-gutters">
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                {/* <img src="strDrinkThumb" alt="strDrink"/> */}
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PZepWHxAIw5xLX-BPZqy9AHaHa%26pid%3DApi&f=1" alt="cocktail" style={{height: "150px", width: "150px"}}/>
              </div>

              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">strDrink</h5>
                  <p className="card-text">strInstructions - Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, modi! Sint itaque aliquid voluptatum, asperiores cumque cum vero quam repellendus qui excepturi vel, recusandae, id et voluptatibus? Magnam, architecto odit!</p>
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
                      <li>strMeasure1 of strIngredient1</li>
                      <li>strMeasure2 of strIngredient2</li>
                      <li>strMeasure3 of strIngredient3</li>
                      <li>strMeasure4 of strIngredient4</li>
                      <li>strMeasure5 of strIngredient5</li>
                      <li>strMeasure6 of strIngredient6</li>
                      <li>strMeasure7 of strIngredient7</li>
                      <li>strMeasure8 of strIngredient8</li>
                      <li>strMeasure9 of strIngredient9</li>
                      <li>strMeasure10 of strIngredient10</li>
                      <li>strMeasure11 of strIngredient11</li>
                      <li>strMeasure12 of strIngredient12</li>
                      <li>strMeasure13 of strIngredient13</li>
                      <li>strMeasure14 of strIngredient14</li>
                      <li>strMeasure15 of strIngredient15</li>
                    </ul>
                  </p>
                  <p className="card-text"><small className="text-muted">strCategory</small></p>
                </div>
              </div>
              
            </div>
          </div>

        </div>

      </div>
    );
  };
  
  export default SingleDrinkCard;