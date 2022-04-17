
import { useState } from "react";
import { useDispatch } from "react-redux";
import RecipeDetailsComp from "../RecipeDetails/recipeDetail";
import "./recipeCard.css";

function RecipeCardComp(props){

    const [isOpen, setIsOpen] = useState(false)

    let windowFeatures = "width=320,height=320";
    function openWindow(){
        // window.open(recipeData['recipe']['url'], windowFeatures)
        window.open((props.recipeData.recipe.url), windowFeatures)
    }

    function openPopup(){
        setIsOpen(!isOpen)
    }

    const dispatch = useDispatch()

    const makeReducer = () => {
        dispatch({type:"Add", payload:props.recipeData.recipe.label })
    }

    return (
        <div className="oneRecipe">
            <div>
                {/* <p onClick={openPopup} className="recipe_name"><u>{recipeData["recipe"]["label"]}</u></p>
                <img onClick={openWindow} className="recipe_img" src={recipeData['recipe']['image']} /> */}
                <p  className="recipe_name"><u>{props.recipeData.recipe.label}</u></p>
                <input onClick={openPopup} type='button' value='Show Ingredients' /><br/>
                <img onClick={openWindow} className="recipe_img" src={props.recipeData.recipe.image} />
                <br/>
                <button onClick={makeReducer}>Add to Favorite</button> <br></br>
                {isOpen == true ? <RecipeDetailsComp data={props.recipeData} callback={data => setIsOpen(data)} /> : null }
            </div>
        </div>)
}

export default RecipeCardComp