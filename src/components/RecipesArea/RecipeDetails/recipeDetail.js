import "./recipeDetail.css";

    function RecipeDetailsComp(props ){
    
    console.log(props.data.recipe.ingredientLines)
    
    return (
    <div className="recipeDetail_app">
        <div className="closeIngredientLines_app">
            <input type='button' value='close' onClick={()=> {props.callback(false)}} />
        </div>
        <div className="ingredientArr_app">
            <a>Ingredients:</a>
            <ul>
            {props.data.recipe.ingredientLines.map((item,index ) => {
                                return <li key={index}>{item}</li>
                            })}
            </ul>
        </div>
    </div>)
}

export default RecipeDetailsComp