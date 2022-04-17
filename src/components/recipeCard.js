
function OneRecipeComp({recipeData}){

    let windowFeatures = "width=320,height=320";
    function openWindow(){
        window.open(recipeData['recipe']['url'], windowFeatures)
    }

    return(
        <div className="oneRecipe" >
            <p className="recipe_name"><u>{recipeData["recipe"]["label"]}</u></p>
            <img onClick={openWindow} className="recipe_img" src={recipeData['recipe']['image']} />
            <br/>
            <div className="recipe_ingredientLines">
                <i>Ingredients:</i>
                <ul>
                    {recipeData.recipe.ingredientLines.map((item,index ) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        </div>)
}

export default OneRecipeComp